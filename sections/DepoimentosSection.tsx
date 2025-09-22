import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Depoimento {
  name: string;
  course: string;
  text: string;
  photo?: ImageWidget;
  rating?: number;
}

export interface Props {
  title?: string;
  subtitle?: string;
  depoimentos?: Depoimento[];
}

export default function DepoimentosSection({
  title = "O QUE NOSSOS ALUNOS DIZEM",
  subtitle = "Histórias reais de quem transformou a carreira com a Anhanguera",
  depoimentos = [
    {
      name: "Maria Silva",
      course: "Gestão de RH",
      text: "A Anhanguera mudou minha vida! Consegui uma promoção logo após me formar e hoje trabalho na área dos meus sonhos.",
      rating: 5
    },
    {
      name: "João Santos", 
      course: "Análise e Desenvolvimento",
      text: "O curso é muito prático e atual. Os professores são excelentes e o suporte é incrível. Recomendo!",
      rating: 5
    },
    {
      name: "Ana Costa",
      course: "Marketing",
      text: "Flexibilidade total para estudar. Consegui conciliar trabalho, família e estudos perfeitamente.",
      rating: 5
    }
  ]
}: Props) {
  return (
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          <p class="text-xl text-gray-600">{subtitle}</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <div key={index} class="bg-white rounded-lg shadow-lg p-6">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {depoimento.name.charAt(0)}
                </div>
                <div class="ml-4">
                  <h4 class="font-bold text-gray-800">{depoimento.name}</h4>
                  <p class="text-sm text-gray-600">{depoimento.course}</p>
                </div>
              </div>
              
              <div class="flex mb-4">
                {Array.from({ length: depoimento.rating || 5 }).map((_, i) => (
                  <span key={i} class="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              
              <p class="text-gray-700 italic">"{depoimento.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}