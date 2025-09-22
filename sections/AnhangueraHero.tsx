import { useSection } from "@deco/deco/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  logo?: ImageWidget;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: ImageWidget;
  formTitle?: string;
  formSubtitle?: string;
}

export default function AnhangueraHero({
  logo = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  title = "CURSOS TECNÓLOGOS EAD",
  subtitle = "Graduação em 2 anos com diploma reconhecido pelo MEC",
  ctaText = "INSCREVA-SE",
  ctaLink = "#",
  backgroundImage = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  formTitle = "INSCREVA-SE AGORA",
  formSubtitle = "Preencha o formulário e garante sua vaga"
}: Props) {
  return (
    <div class="relative min-h-screen bg-gradient-to-r from-purple-900 to-blue-900">
      {/* Background Image */}
      <div 
        class="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Header */}
      <header class="relative z-10 flex justify-between items-center p-6">
        <img src={logo} alt="Anhanguera" class="h-12" />
        <div class="hidden md:flex space-x-6 text-white">
          <a href="#" class="hover:text-yellow-400">Cursos</a>
          <a href="#" class="hover:text-yellow-400">Vestibular</a>
          <a href="#" class="hover:text-yellow-400">Unidades</a>
          <a href="#" class="hover:text-yellow-400">Contato</a>
        </div>
      </header>

      {/* Main Content */}
      <div class="relative z-10 container mx-auto px-6 py-12">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div class="text-white">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-gray-200">
              {subtitle}
            </p>
            <div class="space-y-4 mb-8">
              <div class="flex items-center space-x-3">
                <div class="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span class="text-black text-sm">✓</span>
                </div>
                <span class="text-lg">Diploma reconhecido pelo MEC</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span class="text-black text-sm">✓</span>
                </div>
                <span class="text-lg">100% Online</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span class="text-black text-sm">✓</span>
                </div>
                <span class="text-lg">Mensalidades a partir de R$ 99</span>
              </div>
            </div>
            <a 
              href={ctaLink}
              class="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors"
            >
              {ctaText}
            </a>
          </div>

          {/* Right Form */}
          <div class="bg-white rounded-lg p-8 shadow-2xl">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">{formTitle}</h3>
            <p class="text-gray-600 mb-6">{formSubtitle}</p>
            
            <form class="space-y-4">
              <input 
                type="text" 
                placeholder="Nome completo"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
              />
              <input 
                type="email" 
                placeholder="E-mail"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
              />
              <input 
                type="tel" 
                placeholder="Telefone"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
              />
              <select class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500">
                <option>Selecione o curso</option>
                <option>Análise e Desenvolvimento de Sistemas</option>
                <option>Gestão de Recursos Humanos</option>
                <option>Marketing</option>
                <option>Logística</option>
              </select>
              <button 
                type="submit"
                class="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors"
              >
                GARANTIR MINHA VAGA
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}