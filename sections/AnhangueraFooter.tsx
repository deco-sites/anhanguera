import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  logo?: ImageWidget;
  companyName?: string;
  description?: string;
  phone?: string;
  email?: string;
  address?: string;
}

export default function AnhangueraFooter({
  logo = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  companyName = "Anhanguera",
  description = "Transformando vidas através da educação há mais de 25 anos",
  phone = "(11) 4003-4031",
  email = "atendimento@anhanguera.com",
  address = "São Paulo, SP"
}: Props) {
  return (
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt={companyName} class="h-12 mb-4" />
            <p class="text-gray-300 mb-4">{description}</p>
            <div class="space-y-2">
              <p class="text-sm">📞 {phone}</p>
              <p class="text-sm">✉️ {email}</p>
              <p class="text-sm">📍 {address}</p>
            </div>
          </div>

          {/* Cursos */}
          <div>
            <h4 class="font-bold text-lg mb-4">Cursos</h4>
            <ul class="space-y-2 text-gray-300">
              <li><a href="#" class="hover:text-yellow-400">Análise e Desenvolvimento</a></li>
              <li><a href="#" class="hover:text-yellow-400">Gestão de RH</a></li>
              <li><a href="#" class="hover:text-yellow-400">Marketing</a></li>
              <li><a href="#" class="hover:text-yellow-400">Logística</a></li>
              <li><a href="#" class="hover:text-yellow-400">Gestão Financeira</a></li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 class="font-bold text-lg mb-4">Links Úteis</h4>
            <ul class="space-y-2 text-gray-300">
              <li><a href="#" class="hover:text-yellow-400">Portal do Aluno</a></li>
              <li><a href="#" class="hover:text-yellow-400">Vestibular</a></li>
              <li><a href="#" class="hover:text-yellow-400">Unidades</a></li>
              <li><a href="#" class="hover:text-yellow-400">Trabalhe Conosco</a></li>
              <li><a href="#" class="hover:text-yellow-400">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 class="font-bold text-lg mb-4">Siga-nos</h4>
            <div class="flex space-x-4 mb-4">
              <a href="#" class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700">
                f
              </a>
              <a href="#" class="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700">
                📷
              </a>
              <a href="#" class="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500">
                🐦
              </a>
              <a href="#" class="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700">
                ▶️
              </a>
            </div>
            <p class="text-gray-300 text-sm">Fique por dentro das novidades e dicas de carreira</p>
          </div>
        </div>

        <div class="border-t border-gray-700 mt-8 pt-8 text-center">
          <p class="text-gray-400">
            © 2024 {companyName}. Todos os direitos reservados. | 
            <a href="#" class="hover:text-yellow-400 ml-2">Política de Privacidade</a> | 
            <a href="#" class="hover:text-yellow-400 ml-2">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
}