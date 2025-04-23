import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function PatternDashboard() {
  const [userQuestion, setUserQuestion] = useState("");
  const [oracleResponse, setOracleResponse] = useState("");

  const userProfile = {
    astrology: { sun_sign: "Capricorn" },
    human_design: { type: "Generator", authority: "Sacral" },
    bazi: { animal_sign: "Dragon", day_master: "Yang Metal" },
    numerology: { life_path: 8 },
    chakra: { heart: "underactive", crown: "blocked" },
  };

  const handleAskOracle = async () => {
    try {
      const res = await fetch("https://oracle-api-server.onrender.com/api/oracle-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userQuestion, userProfile }),
      });

      const data = await res.json();
      setOracleResponse(data.response);
    } catch (error) {
      console.error("Failed to fetch oracle response", error);
      setOracleResponse("Sorry, I couldn't connect to the Oracle right now.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Sacred Pattern</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">🧍 You Are</h2>
            <div className="space-y-2">
              <Badge>🐉 Dragon (Chinese Zodiac)</Badge>
              <Badge>☀️ Capricorn Sun</Badge>
              <Badge>🧬 Generator (Sacral Authority)</Badge>
              <Badge>🔢 Life Path 8</Badge>
              <Badge>🌿 Yang Metal Day Master</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">🔍 Core Pattern Summary</h2>
            <p className="text-muted-foreground">
              You are structured, powerful, and intuitive — a leader who thrives
              when grounded in mastery and aligned timing. Your energy pattern is
              defined by Yang Metal and Earth traits.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">🗓️ This Week’s Insight</h2>
          <p className="text-sm text-muted-foreground">
            This week, your chart signals a time for grounding and introspection. Avoid major decisions or public commitments. Focus on nurturing your home space and emotional clarity. A better time for action is coming next week.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Pattern Overview</TabsTrigger>
          <TabsTrigger value="details">System Details</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-lg font-semibold mb-2">💬 Ask the Oracle</h2>
              <p className="text-sm text-muted-foreground">
                Have a question about today’s energy, love, timing, or your pattern? Ask anything — our system learns from your chart.
              </p>
              <Input
                placeholder="e.g. What color should I wear to the park today?"
                value={userQuestion}
                onChange={(e) => setUserQuestion(e.target.value)}
              />
              <Button className="w-full" onClick={handleAskOracle}>
                Ask
              </Button>
              {oracleResponse && (
                <p className="text-sm text-muted-foreground bg-gray-100 p-3 rounded">
                  {oracleResponse}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </Tabs>
    </div>
  );
}
