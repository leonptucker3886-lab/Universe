import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <Image
          src="https://assets.kiloapps.io/user_510ee690-064d-4396-9031-fb485773f7b7/6f35ac29-41bf-4c62-8e0a-3e995109aa57/1c369e27-7173-4fc2-94d4-0ed64746ec04.png"
          alt="Cosmic universe background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="p-8 flex flex-col justify-center items-center">
          <div className="flex items-center gap-4">
            <span className="text-4xl font-serif text-white tracking-widest">C</span>
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-yellow-300 drop-shadow-[0_0_15px_rgba(250,204,21,0.9)]">
                <polygon points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" fill="currentColor" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 border border-yellow-300/30 rounded-full animate-ping" />
              </div>
            </div>
            <span className="text-4xl font-serif text-white tracking-widest">U</span>
          </div>
          <span className="text-xs font-serif text-white/60 tracking-[0.3em] mt-2">CHURCH OF THE UNIVERSE</span>
        </header>

        <section className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <p className="text-white/80 max-w-xl text-lg mb-10 leading-relaxed">
            A spiritual community honoring the cosmos as our cathedral, 
            the stars as our congregation, and the infinite mysteries 
            of existence as our sacred text.
          </p>
          <div className="flex gap-2 justify-center items-center">
            <button className="border border-white text-white px-6 py-3 text-sm tracking-wider hover:bg-white/10 transition-colors whitespace-nowrap">
              The Grand Composition
            </button>
            <button className="border border-white text-white px-6 py-3 text-sm tracking-wider hover:bg-white/10 transition-colors whitespace-nowrap">
              Scripture
            </button>
            <button className="border border-white text-white px-6 py-3 text-sm tracking-wider hover:bg-white/10 transition-colors whitespace-nowrap">
              Rules of Engagement
            </button>
          </div>
        </section>

        <section id="about" className="bg-black/60 backdrop-blur-sm py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-white text-2xl font-serif tracking-widest mb-8">OUR PURPOSE</h3>
            <p className="text-white/80 leading-relaxed mb-8">
              The Universe is everything—it was here before us and will be here after. 
              We are a community seeking the divine in the infinite expanse above and 
              within. The stars are our lineage; the cosmos, our sacred ground. Through 
              the study of scripture, we find wholeness and draw nearer to the whole of 
              existence. True enlightenment finds those who stop searching and simply 
              listen. We worship no distant deity—we honor the quiet whisper of intuition 
              that guides our soul. We cannot say what lies beyond this life—but do not wait until death to find your peace. We 
              choose to embrace this one with gratitude and reverence for its mystery.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-white/60 text-4xl font-serif mb-2">✦</div>
                <h4 className="text-white font-serif tracking-wider mb-2">CONTEMPLATION</h4>
                <p className="text-white/60 text-sm">Meditating on cosmic truths</p>
              </div>
              <div className="text-center">
                <div className="text-white/60 text-4xl font-serif mb-2">✦</div>
                <h4 className="text-white font-serif tracking-wider mb-2">DISCOVERY</h4>
                <p className="text-white/60 text-sm">Exploring the unknown</p>
              </div>
              <div className="text-center">
                <div className="text-white/60 text-4xl font-serif mb-2">✦</div>
                <h4 className="text-white font-serif tracking-wider mb-2">CONNECTION</h4>
                <p className="text-white/60 text-sm">Unitng with the infinite</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 px-4 text-center">
          <nav className="flex justify-center gap-8 mb-4">
            <button className="text-white/60 hover:text-white transition-colors text-sm tracking-wider">Scripture</button>
            <button className="text-white/60 hover:text-white transition-colors text-sm tracking-wider">The Grand Composition</button>
            <button className="text-white/60 hover:text-white transition-colors text-sm tracking-wider">Rules of Engagement</button>
          </nav>
          <p className="text-white/50 text-sm tracking-wider">
            © 2026 CHURCH OF THE UNIVERSE • ALL RIGHTS RESERVED
          </p>
        </footer>
      </div>
    </main>
  );
}
