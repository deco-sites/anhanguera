export interface Props {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  urgencyText?: string;
}

export default function CTAFinalSection({
  title = "NÃO PERCA TEMPO!",
  subtitle = "Comece sua graduação agora e transforme seu futuro",
  ctaText = "INSCREVA-SE AGORA",
  ctaLink = "#",
  urgencyText = "Vagas limitadas para o próximo semestre"
}: Props) {
  return (
    <section class="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
      <div class="container mx-auto px-6 text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h2>
          <p class="text-xl md:text-2xl text-gray-200 mb-8">{subtitle}</p>
          
          <div class="bg-yellow-400 text-black px-6 py-3 rounded-lg inline-block mb-8">
            <span class="font-bold">⚡ {urgencyText}</span>
          </div>

          <div class="space-y-6">
            <a 
              href={ctaLink}
              class="inline-block bg-yellow-400 text-black px-12 py-4 rounded-lg font-bold text-xl hover:bg-yellow-500 transition-colors transform hover:scale-105"
            >
              {ctaText}
            </a>
            
            <div class="text-white">
              <p class="text-lg mb-4">✅ Processo 100% online</p>
              <p class="text-lg mb-4">✅ Resultado em até 24h</p>
              <p class="text-lg">✅ Comece a estudar imediatamente</p>
            </div>
          </div>

          {/* Countdown Timer Placeholder */}
          <div class="mt-12 bg-black bg-opacity-30 rounded-lg p-6">
            <p class="text-white text-lg mb-4">Oferta especial termina em:</p>
            <div class="flex justify-center space-x-4 text-white">
              <div class="bg-white bg-opacity-20 rounded-lg p-4">
                <div class="text-2xl font-bold">23</div>
                <div class="text-sm">HORAS</div>
              </div>
              <div class="bg-white bg-opacity-20 rounded-lg p-4">
                <div class="text-2xl font-bold">45</div>
                <div class="text-sm">MINUTOS</div>
              </div>
              <div class="bg-white bg-opacity-20 rounded-lg p-4">
                <div class="text-2xl font-bold">12</div>
                <div class="text-sm">SEGUNDOS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}