"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Mic2, Users, Mail, Globe, MessageCircle, CalendarCheck } from "lucide-react";
import Image from "next/image";

export default function CarnaticAcademyWebsite() {
  return (
    <div className="min-h-screen bg-[#FFFDF5] p-6 grid gap-10">

      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Swara Carnatic Music Academy</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Learn authentic Carnatic vocal music through structured online Carnatic music classes for kids and adults worldwide.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <a href="https://wa.me/15488871801" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-2xl px-6 py-2 text-base flex items-center gap-2 bg-[#0F9D58] hover:bg-[#0B8043] text-white">
              <MessageCircle className="w-5 h-5" />
              Enroll via WhatsApp
            </Button>
          </a>

          <Button variant="outline" className="rounded-2xl px-6 py-2 text-base flex items-center gap-2">
            <Globe className="w-4 h-4" /> Online Classes Worldwide
          </Button>
        </div>
      </motion.section>

      {/* Founder Section */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="max-w-4xl mx-auto">
        <Card className="rounded-2xl shadow-md bg-[#FEF7E0] border border-[#FDD663]">
          <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <Image
              src="/images/founder.jpg"
              alt="Swathi Sathyanarayana - Founder of Swara Carnatic Music Academy"
              width={160}
              height={160}
              className="rounded-full object-cover shadow-md"
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Founded by Swathi Sathyanarayana</h2>
              <p className="text-slate-600">
                A passionate Carnatic music educator dedicated to preserving tradition while making learning joyful, structured, and accessible for students worldwide.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* About */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="max-w-4xl mx-auto">
        <Card className="rounded-2xl shadow-md bg-[#FEF7E0] border border-[#FDD663]">
          <CardContent className="p-6 space-y-4 text-center">
            <Music className="w-10 h-10 mx-auto" />
            <h2 className="text-2xl font-semibold">About Our Academy</h2>
            <p className="text-slate-600">
              Structured Carnatic vocal training focusing on shruti shuddham, laya control, raga knowledge, tala mastery, and performance confidence.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Courses */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="grid md:grid-cols-2 gap-6">
        <Card className="rounded-2xl shadow-md bg-[#FEF7E0] border border-[#FDD663]">
          <CardContent className="p-6 text-center space-y-3">
            <Users className="w-8 h-8 mx-auto" />
            <h3 className="text-xl font-semibold">Beginner Level</h3>
            <p className="text-sm text-slate-600">Sarali varisai, Janta varisai, Alankaras, bhajans, rhythm basics.</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md bg-[#FEF7E0] border border-[#FDD663]">
          <CardContent className="p-6 text-center space-y-3">
            <Mic2 className="w-8 h-8 mx-auto" />
            <h3 className="text-xl font-semibold">Intermediate Level</h3>
            <p className="text-sm text-slate-600">Geethams, Swarajathis, Varnams, voice culture, manodharma basics.</p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="max-w-4xl mx-auto">
        <Card className="rounded-2xl shadow-md bg-[#FEF7E0] border border-[#FDD663]">
          <CardContent className="p-6 text-center space-y-3">
            <h2 className="text-2xl font-semibold">Why Choose Swara Academy?</h2>
            <p className="text-slate-600">
              Personalized attention • Strong classical foundation • Performance opportunities • Online worldwide • Friendly environment
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Booking */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="max-w-4xl mx-auto">
        <Card className="rounded-2xl shadow-md bg-[#FEF7E0] border border-[#FDD663]">
          <CardContent className="p-8 text-center space-y-4">
            <CalendarCheck className="w-10 h-10 mx-auto text-[#0F9D58]" />
            <h2 className="text-2xl font-semibold">Book a Free 15-Minute Intro Session</h2>
            <p className="text-slate-700">
              Meet the teacher, understand the curriculum, and experience Carnatic music learning live on Google Meet.
            </p>
            <a href="https://calendar.app.google/quZrLYWHdDeMQgf18" target="_blank" rel="noopener noreferrer">
              <Button className="rounded-2xl px-6 py-3 text-base bg-[#0F9D58] hover:bg-[#0B8043] text-white flex items-center gap-2">
                <CalendarCheck className="w-5 h-5" />
                Schedule on Google Meet
              </Button>
            </a>
          </CardContent>
        </Card>
      </motion.section>

      {/* Contact */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center">
        <Card className="rounded-2xl shadow-md max-w-xl mx-auto bg-[#FEF7E0] border border-[#FDD663]">
          <CardContent className="p-6 space-y-3">
            <Mail className="w-8 h-8 mx-auto" />
            <h2 className="text-2xl font-semibold">Enrollment Open Worldwide</h2>
            <p className="text-slate-600">Email: swathids013@gmail.com</p>
            <a href="https://wa.me/15488871801" target="_blank" rel="noopener noreferrer">
              <Button className="rounded-2xl w-full flex items-center justify-center gap-2 bg-[#0F9D58] hover:bg-[#0B8043] text-white">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp to Book Trial
              </Button>
            </a>
          </CardContent>
        </Card>
      </motion.section>

    </div>
  );
}
