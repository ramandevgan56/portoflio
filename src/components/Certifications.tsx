import React from 'react';
import type { Certification, Achievement } from '../types/portfolio';
import { Award, ExternalLink, ShieldCheck, Trophy, CheckCircle2, User, MessageSquareQuote } from 'lucide-react';
import { AwsLogo } from './SkillLogos';

interface CertificationsProps {
  certifications: Certification[];
  achievements?: Achievement[];
}

export const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {

  const getCertLogo = (issuer: string, title: string) => {
    const text = (issuer + ' ' + title).toUpperCase();
    if (text.includes('AWS') || text.includes('AMAZON')) {
      return (
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center p-2.5 text-amber-400 shrink-0">
          <AwsLogo className="w-7 h-7" />
        </div>
      );
    }
    if (text.includes('MICROSOFT') || text.includes('AZURE')) {
      return (
        <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center p-2 text-sky-400 shrink-0">
          <svg className="w-7 h-7" viewBox="0 0 23 23" fill="none">
            <path fill="#f25022" d="M1 1h10v10H1z" />
            <path fill="#7fba00" d="M12 1h10v10H1z" />
            <path fill="#00a4ef" d="M1 12h10v10H1z" />
            <path fill="#ffb900" d="M12 12h10v10H12z" />
          </svg>
        </div>
      );
    }
    return (
      <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center p-2 text-blue-400 shrink-0">
        <svg className="w-7 h-7" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
        </svg>
      </div>
    );
  };

  const achievementPoints = [
    "Worked remotely with international clients and managed multiple project deadlines.",
    "Successfully completed 9 freelance projects on Upwork with positive client feedback.",
    "Delivered projects on time while maintaining clear communication with clients.",
    "Won college hackathon and got 2nd position."
  ];

  // Exact Client Feedbacks from images
  const clientFeedbacks = [
    {
      title: "Video Editor for Meta Ads (Short Form 45-90sec)",
      date: "May 19, 2026",
      rating: 5.0,
      comment: "Great experience working with Raman!",
      client: "Louis K."
    },
    {
      title: "Short-Form Video Editor for Premium Educational/Ex...",
      date: "April 8, 2026",
      rating: 5.0,
      comment: "Raman communication was extremely clear, and the output was great as well. He understood the requirements and delivered the project based on the requirements in a timely fashion.",
      client: "Tirth P."
    },
    {
      title: "Video Editor | Chroma Key | Capcut | Adobe | AI",
      date: "February 3, 2026",
      rating: 5.0,
      comment: "Great guy to work with! Fast responses, excellent at his work, and very easy to communicate with. Highly recommended!",
      client: "Major V."
    }
  ];

  return (
    <div className="space-y-16 py-8">
      
      {/* SECTION 1: CERTIFICATIONS */}
      <section id="certifications">
        <div className="flex items-center gap-3 mb-8 scroll-reveal">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Certifications
            </h2>
            <p className="text-stone-400 text-sm mt-1 font-sans">
              Verified cloud industry credentials from AWS, Microsoft Azure, and Google.
            </p>
          </div>
        </div>

        {/* Certifications Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`bg-[#121215] border border-stone-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-indigo-500/50 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between scroll-reveal delay-${(index + 1) * 100}`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  {getCertLogo(cert.issuer, cert.title)}
                  <span className="font-mono text-xs text-stone-400 bg-stone-900 px-3 py-1 rounded-full border border-stone-800 font-semibold">
                    Issued {cert.year}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white group-hover:text-amber-300 transition-colors mb-1">
                  {cert.title}
                </h3>

                <p className="font-mono text-xs text-stone-400 mb-4">
                  {cert.issuer}
                </p>
              </div>

              {cert.verifyUrl && (
                <div className="pt-4 border-t border-stone-800/80 mt-2">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700 px-4 py-2 rounded-full font-mono text-xs font-bold transition-all shadow-xs group-hover:border-amber-500/50"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>Show credential</span>
                    <ExternalLink className="w-3 h-3 text-stone-400" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: ACHIEVEMENTS */}
      <section id="achievements">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Achievements
            </h2>
            <p className="text-stone-400 text-sm mt-1 font-sans">
              Key accomplishments, client project deliverables, and hackathon awards.
            </p>
          </div>
        </div>

        {/* Clean 4 Bullet Points List */}
        <div className="bg-[#121215] border border-stone-800/90 rounded-2xl p-6 sm:p-8 shadow-xl mb-12">
          <div className="space-y-4">
            {achievementPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-stone-900/60 border border-stone-800/70 hover:border-emerald-500/40 transition-colors group"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <p className="font-sans text-base text-stone-200 leading-relaxed font-medium">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CLIENT FEEDBACK (3) SUBSECTION */}
        <div className="mt-12">
          <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-800">
            <div className="flex items-center gap-3">
              <MessageSquareQuote className="w-6 h-6 text-amber-400" />
              <h3 className="font-display font-bold text-2xl text-white">
                Client feedback (3)
              </h3>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-xs text-amber-400 font-bold bg-amber-950/60 px-3 py-1.5 rounded-full border border-amber-800/60">
              <div className="flex text-amber-400">
                {'★'.repeat(5)}
              </div>
              <span>5.0 RATING</span>
            </div>
          </div>

          {/* 4 Client Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientFeedbacks.map((fb, idx) => (
              <div
                key={idx}
                className="bg-[#121215] border border-stone-800 rounded-2xl p-6 shadow-xl hover:border-amber-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-stone-400 mb-4 pb-3 border-b border-stone-800/60">
                    <span className="flex items-center gap-1 text-stone-400">
                      📅 {fb.date}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400 font-bold">
                      <span>{'★'.repeat(5)}</span>
                      <span>5.0</span>
                    </div>
                  </div>

                  <p className="font-sans italic text-stone-300 text-sm leading-relaxed mb-6">
                    "{fb.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-stone-400 pt-3 border-t border-stone-800/60">
                  <div className="w-6 h-6 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center text-stone-300">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-stone-200">{fb.client}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
};
