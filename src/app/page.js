"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Mic2, Users, Mail, Globe, Star } from "lucide-react";

export default function CarnaticAcademyWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-rose-50 p-6 grid gap-10">

      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Swara Carnatic Music Academy</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Learn authentic Carnatic vocal music through structured online Carnatic music classes for kids and adults worldwide.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <Button className="rounded-2xl px-6 py-2 text-base">Enroll Now</Button>
          <Button variant="outline" className="rounded-2xl px-6 py-2 text-base flex items-center gap-2">
            <Globe className="w-4 h-4" /> Online Classes Worldwide
          </Button>
        </div>
      </motion.section>

      {/* Founder Section */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="max-w-4xl mx-auto">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 text-center space-y-3">
            <h2 className="text-2xl font-semibold">Founded by Swathi Sathyanarayana</h2>
            <p className="text-slate-600">
              A passionate Carnatic music educator dedicated to preserving tradition while making learning joyful, structured, and accessible.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* About Section */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="max-w-4xl mx-auto">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 space-y-4 text-center">
            <Music className="w-10 h-10 mx-auto" />
            <h2 className="text-2xl font-semibold">About Our Academy</h2>
            <p className="text-slate-600">
              Structured Carnatic vocal training focusing on shruti shuddham, laya control, raga knowledge, tala mastery, and performance confidence.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Courses Section */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="grid md:grid-cols-3 gap-6">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 text-center space-y-3">
            <Users className="w-8 h-8 mx-auto" />
            <h3 className="text-xl font-semibold">Beginner Level</h3>
            <p className="text-sm text-slate-600">Sarali varisai, Janta varisai, Alankaras, bhajans, rhythm basics.</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 text-center space-y-3">
            <Mic2 className="w-8 h-8 mx-auto" />
            <h3 className="text-xl font-semibold">Intermediate Level</h3>
            <p className="text-sm text-slate-600">Geethams, Swarajathis, Varnams, voice culture, manodharma basics.</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 text-center space-y-3">
            <Star className="w-8 h-8 mx-auto" />
            <h3 className="text-xl font-semibold">Advanced Level</h3>
            <p className="text-sm text-slate-600">Kritis, ragam-tanam, alapana, kalpana swaras, stage performance training.</p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="max-w-4xl mx-auto">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 text-center space-y-3">
            <h2 className="text-2xl font-semibold">Why Choose Swara Academy?</h2>
            <p className="text-slate-600">
              Personalized attention • Strong classical foundation • Performance opportunities • Online worldwide • Friendly environment
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Contact */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center">
        <Card className="rounded-2xl shadow-md max-w-xl mx-auto">
          <CardContent className="p-6 space-y-3">
            <Mail className="w-8 h-8 mx-auto" />
            <h2 className="text-2xl font-semibold">Enrollment Open Worldwide</h2>
            <p className="text-slate-600">Email: swathids013@email.com</p>
            <Button className="rounded-2xl w-full">Book a Free Trial Class</Button>
          </CardContent>
        </Card>
      </motion.section>

    </div>
  );
}
