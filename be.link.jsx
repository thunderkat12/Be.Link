import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  X,
  ArrowRight,
  Phone,
  Mail,
  Sparkles
} from "lucide-react";

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const portfolioImages = {
    socialMedia: [
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/e88342bdd_4.png",
        title: "@garota.marketing",
        category: "Social Media"
      },
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/bfaf24abf_5.png",
        title: "CPMH",
        category: "Social Media"
      },
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/fc79d2aca_6.png",
        title: "HeroMax",
        category: "Social Media"
      },
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/6f18e3365_7.png",
        title: "Matheus Duarte",
        category: "Social Media"
      },
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/612900c99_8.png",
        title: "AssimFlor",
        category: "Social Media"
      },
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/45a8ae2f3_9.png",
        title: "Tuli Ariel",
        category: "Social Media"
      },
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/a13acce9e_10.png",
        title: "Agro Agenda",
        category: "Social Media"
      },
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/d46b36dac_11.png",
        title: "Ei Nativa",
        category: "Social Media"
      },
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/963e178f6_12.png",
        title: "The Farm News",
        category: "Social Media"
      }
    ],
    branding: [
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/517c0e49e_13.png",
        title: "Tresoré - Chocolat Artisanal",
        category: "Branding"
      },
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/4ca34c1e1_14.png",
        title: "La Verité - Bakery",
        category: "Branding"
      },
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/ed2f7311d_15.png",
        title: "Karen Store",
        category: "Branding"
      },
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/2c629adfb_16.png",
        title: "Studio Emunah",
        category: "Branding"
      },
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/af6cc3d3e_17.png",
        title: "Chef Paulo Tarso",
        category: "Branding"
      },
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/9c2008bf1_18.png",
        title: "Ei Nativa Brand",
        category: "Branding"
      },
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/20d7de488_19.png",
        title: "Boo Boo Kids",
        category: "Branding"
      },
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/2a877ab16_20.png",
        title: "bpe. Digital",
        category: "Branding"
      },
      {
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/8dfffe72f_21.png",
        title: "AssimFlor Instituto",
        category: "Branding"
      }
    ]
  };

  const allImages = [...portfolioImages.socialMedia, ...portfolioImages.branding];
  
  const filteredImages = activeFilter === "all" 
    ? allImages 
    : activeFilter === "social" 
    ? portfolioImages.socialMedia 
    : portfolioImages.branding;

  return (
    <div className="bg-black text-white overflow-x-hidden relative">
      {/* Mouse Follower Effect - Only the ball */}
      <motion.div
        className="fixed w-6 h-6 bg-[#A3E635] rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      />

      {/* Hero Section - Cover Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/0c2282ef6_plano1.png"
            alt="BeLink Portfolio Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40" />
        </motion.div>

        {/* Centralized Main Container with Modern UI/UX */}
        <motion.div 
          className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 max-w-7xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ 
            scale: 1.02,
            rotateX: 2,
            rotateY: 2,
          }}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
        >
          {/* Glass morphism background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/10 backdrop-blur-xl rounded-3xl border border-white/10 shadow-xl"></div>
          
          <div className="relative z-10 text-center p-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center justify-between mb-12">
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.1, rotateZ: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Sparkles className="w-8 h-8 text-[#A3E635] drop-shadow-lg" />
                  <span className="text-3xl font-bold">
                    BeL<span className="glow-text">i</span>nk
                  </span>
                </motion.div>
                <motion.span 
                  className="text-2xl font-light text-gray-400"
                  whileHover={{ scale: 1.1, color: "#A3E635" }}
                  transition={{ duration: 0.3 }}
                >
                  2025
                </motion.span>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="relative"
                whileHover={{ 
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.05
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div 
                  className="inline-flex items-center gap-3 mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Sparkles className="w-12 h-12 text-[#A3E635] drop-shadow-2xl" />
                  <span className="text-4xl md:text-6xl font-light">Creative</span>
                </motion.div>
                
                {/* Enhanced background blur effect with modern styling */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-[#A3E635]/10 to-black/40 backdrop-blur-md rounded-3xl -z-10 shadow-2xl border border-[#A3E635]/20"></div>
                
                <motion.h1 
                  className="text-7xl md:text-9xl font-black glow-text leading-none mb-8 relative z-10 cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 5,
                    textShadow: "0 0 20px rgba(163, 230, 53, 0.6), 0 0 40px rgba(163, 230, 53, 0.3)",
                    filter: "drop-shadow(0 5px 15px rgba(163, 230, 53, 0.2))"
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15 
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  PORTFÓLIO
                </motion.h1>

                {/* Modern floating elements */}
                <motion.div
                  className="absolute -top-10 -right-10 w-20 h-20 bg-[#A3E635]/20 rounded-full blur-xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute -bottom-10 -left-10 w-16 h-16 bg-white/10 rounded-full blur-lg"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>



        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronRight className="w-8 h-8 text-[#A3E635] rotate-90" />
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 relative bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/9b8ec2d2d_2.png"
                alt="Content"
                className="w-full rounded-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl font-black mb-8">
                <span className="glow-text">CONTENT</span>
              </h2>

              <div className="space-y-4">
                {[
                  { num: "03", title: "SOBRE NÓS" },
                  { num: "04", title: "VISÃO & MISSÃO" },
                  { num: "05", title: "TRABALHOS" },
                  { num: "06", title: "MARCAS" },
                  { num: "08", title: "SERVIÇOS" },
                  { num: "08", title: "CONTATO" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border-b border-[#A3E635] border-opacity-20 hover:border-opacity-100 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-2xl font-bold text-gray-500 group-hover:text-[#A3E635] transition-colors">
                        {item.num}
                      </span>
                      <span className="text-xl font-semibold">{item.title}</span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-[#A3E635] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/c76917c6a_26.png"
                alt="Sobre Nós"
                className="w-full rounded-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-7xl font-black mb-8">
                SOBRE <span className="glow-text">NÓS</span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                A BeLink nasceu da conexão entre <span className="text-[#A3E635] font-semibold">estratégia, 
                criatividade e inteligência artificial</span>. Não somos apenas uma agência, somos o elo entre 
                <span className="text-[#A3E635] font-semibold"> tecnologia e performance</span>, transformando dados 
                em decisões e <span className="text-[#A3E635] font-semibold">ideias em resultados reais</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visão & Missão */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-7xl font-black mb-8">
                <span className="glow-text">VISÃO</span>
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="inline-block ml-4 text-4xl"
                >
                  ~
                </motion.span>
              </h2>
              <h2 className="text-7xl font-black mb-8">MISSÃO</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/2688de3b4_28.png"
                alt="Visão e Missão"
                className="w-full rounded-2xl"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-xl text-gray-300 leading-relaxed">
                <span className="text-[#A3E635] font-bold">Engajar, conectar e gerar valor.</span> Acreditamos que 
                uma marca forte nasce da combinação entre estratégia, tecnologia e emoção.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-xl text-gray-300 leading-relaxed">
                Nossa missão é construir e trabalhar com marcas que querem se destacar, vender e permanecerem relevantes, 
                por meio de <span className="text-[#A3E635]">estratégias que acompanham a velocidade do mercado</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nosso Time */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#A3E635] to-[#84cc16]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-8xl md:text-9xl font-black text-black mb-6">WORK</h2>
            <h2 className="text-8xl md:text-9xl font-black text-black mb-12">EXPERIENCE</h2>
            
            <div className="max-w-3xl mx-auto bg-black bg-opacity-20 rounded-3xl p-10 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-black mb-6">NOSSO TIME</h3>
              <p className="text-xl text-black leading-relaxed">
                Formada por profissionais com visão de mercado, mentalidade estratégica 
                e domínio técnico, nossa equipe une marketing, automação e análise de 
                dados para impulsionar negócios com eficiência e autenticidade.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Highlights Title */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-black mb-4">
              PORTFÓLIO
              <br />
              <span className="glow-text">HIGHLIGHTS</span>
            </h2>
            <p className="text-2xl text-gray-400 mb-12">REDES SOCIAIS</p>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 mb-16">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeFilter === "all"
                    ? "bg-[#A3E635] text-black"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setActiveFilter("social")}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeFilter === "social"
                    ? "bg-[#A3E635] text-black"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                Social Media
              </button>
              <button
                onClick={() => setActiveFilter("branding")}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeFilter === "branding"
                    ? "bg-[#A3E635] text-black"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                Branding
              </button>
            </div>
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-square">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-bold text-lg">{image.title}</p>
                        <p className="text-[#A3E635] text-sm">{image.category}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Branding Section Title */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/50ab0ffb2_24.png"
              alt="Branding"
              className="w-full rounded-2xl mb-8"
            />
          </motion.div>
        </div>
      </section>

      {/* Marcas */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4">
              <div className="h-1 w-20 bg-[#A3E635]" />
              <h2 className="text-8xl font-black">
                <span className="glow-text">MARCAS</span>
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/09d3b09b9_22.png"
              alt="Marcas Clientes"
              className="w-full rounded-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/c754da0d4_25.png"
              alt="Serviços"
              className="w-full rounded-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-32 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee6c43da0b9a5f4dd21d74/7a42a6983_23.png"
            alt="Contato Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl text-gray-400 mb-4">OBRIGADO!</h2>
            <h3 className="text-8xl md:text-9xl font-black mb-8">
              <span className="glow-text">CONTATO</span>
            </h3>
            <p className="text-2xl text-gray-300">VAMOS CRIAR ALGO BELO JUNTOS</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
          >
            <a
              href="https://wa.me/5561992705546"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-8 rounded-2xl border border-[#A3E635] border-opacity-20 hover:border-opacity-100 transition-all hover:bg-[#A3E635] hover:bg-opacity-5"
            >
              <Phone className="w-12 h-12 text-[#A3E635]" />
              <div>
                <p className="text-sm text-gray-400 mb-2">WhatsApp</p>
                <p className="text-2xl font-bold">+55 61 9927-0546</p>
              </div>
            </a>

            <a
              href="mailto:belinkcreative@gmail.com"
              className="flex items-center gap-6 p-8 rounded-2xl border border-[#A3E635] border-opacity-20 hover:border-opacity-100 transition-all hover:bg-[#A3E635] hover:bg-opacity-5"
            >
              <Mail className="w-12 h-12 text-[#A3E635]" />
              <div>
                <p className="text-sm text-gray-400 mb-2">Email</p>
                <p className="text-2xl font-bold">belinkcreative@gmail.com</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="inline-flex items-center gap-4 text-gray-500">
              <div className="h-px w-32 bg-gradient-to-r from-transparent to-[#A3E635]" />
              <span>© 2025 BeLink Creative</span>
              <div className="h-px w-32 bg-gradient-to-l from-transparent to-[#A3E635]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#A3E635] transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full rounded-2xl"
              />
              
              <div className="mt-6 text-center">
                <h3 className="text-3xl font-bold text-[#A3E635] mb-2">{selectedImage.title}</h3>
                <p className="text-gray-400">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}