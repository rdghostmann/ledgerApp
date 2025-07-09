import React from "react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import NavHeader from "../components/NavHeader/NavHeader";

const TransactionPage = () => {
  return (
    // <div className="max-w-3xl mx-auto py-8 px-2">
    <div className="max-w-6xl mx-auto px-4">

      <NavHeader />

      <Card className="border-none bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6">
        <CardHeader>
          <CardTitle>
            <span className="text-red-600">Transaction History</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="">
          <Tabs defaultValue="received" className=" w-4/5 mx-auto">
            <TabsList className="mx-auto mb-4 flex gap-2 bg-transparent p-0">
              <TabsTrigger
                value="received"
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-violet-600 transition"
              >
                <ArrowDownLeft className="w-4 h-4" />
                Received
              </TabsTrigger>
              <TabsTrigger
                value="sent"
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-violet-600 transition"
              >
                <ArrowUpRight className="w-4 h-4" />
                Sent
              </TabsTrigger>
            </TabsList>
            <TabsContent value="received">

              {/* Received transactions list goes here */}
              <div className="text-center text-muted-foreground py-8">
                No received transactions yet.
              </div>
            </TabsContent>
            <TabsContent value="sent">
              {/* Sent transactions list goes here */}
              <div className="text-center text-muted-foreground py-8">
                No sent transactions yet.
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionPage;