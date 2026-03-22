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
        <header className="p-8 flex justify-center items-center">
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
        </header>

        <section className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <p className="text-white/80 max-w-xl text-lg mb-10 leading-relaxed">
            A spiritual community honoring the cosmos as our cathedral, 
            the stars as our congregation, and the infinite mysteries 
            of existence as our sacred text.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-black px-8 py-3 text-sm tracking-wider hover:bg-white/90 transition-colors">
              Scripture
            </button>
            <button className="border border-white text-white px-8 py-3 text-sm tracking-wider hover:bg-white/10 transition-colors">
              Numerology
            </button>
          </div>
        </section>

        <section id="about" className="bg-black/60 backdrop-blur-sm py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-white text-2xl font-serif tracking-widest mb-8">OUR PURPOSE</h3>
            <p className="text-white/80 leading-relaxed mb-8">
              In the Beginning, there was the Cosmos—and the Cosmos was all that was, 
              and all that shall ever be. We, the Church of the Universe, are a 
              non-denominational community seeking the divine within the infinite. 
              The stars are our ancestors; the galaxies, our cathedral. By studying 
              the ancient scrolls of scripture, we find wholeness and draw near to 
              the entirety of all that exists. enlightenment comes not to those who 
              seek it, but to those who cease their searching and simply listen. We 
              worship not a distant god, but the still small voice within—the whisper 
              of intuition that stirs the soul. We know not what lies beyond the veil 
              of death, yet we give thanks for the life we have, and honor the 
              sacred mystery of this present world.
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
          <p className="text-white/50 text-sm tracking-wider">
            © 2026 CHURCH OF THE UNIVERSE • ALL RIGHTS RESERVED
          </p>
        </footer>
      </div>
    </main>
  );
}
