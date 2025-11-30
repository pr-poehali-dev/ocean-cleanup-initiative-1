import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const fishingAreas = [
    "Северно-Западная часть Тихого океана",
    "Северо-Восточная часть Тихого океана",
    "Северо-Восточная Атлантика",
    "Индийский океан (Восточный район)",
    "Юго-Восточная часть Тихого океана"
  ];

  const solutions = [
    {
      number: "1",
      title: "Перестаньте пить бутилированную воду",
      description: "Уменьшайте покупку пластиковой тары — миллионы людей делают то же самое каждый день.",
      icon: "Droplet"
    },
    {
      number: "2",
      title: "Не используйте пластиковые стаканчики, посуду и соломинки",
      description: "В 50% случаев в организмах погибших морских черепах находят проглоченный мусор, попавший в океан.",
      icon: "Trash2"
    },
    {
      number: "3",
      title: "Будьте осознанным потребителем",
      description: "Частицы микропластика из зубной пасты, геля для душа и одежды попадают в океан через сточные воды.",
      icon: "Leaf"
    },
    {
      number: "4",
      title: "Организуйте кампанию по очистке пляжа",
      description: "Самый наглядный способ увидеть загрязнение океана - побывать на ближайшем пляже. Соберитесь с друзьями и соберите мусор, затем правильно утилизируйте его.",
      icon: "Users"
    },
    {
      number: "5",
      title: "Будьте ответственным владельцем домашнего животного",
      description: "Наполнитель для кошачьих туалетов очень опасен для морских существ, поэтому не смывайте его в унитаз, чтобы он не очутился в океане.",
      icon: "Cat"
    },
    {
      number: "6",
      title: "Сократить потребление рыбы",
      description: "Неконтролируемый рыбный промысел считается самой большой угрозой для океана. Почти все рыболовные компании в мире грешат чрезмерной добычей.",
      icon: "Fish"
    }
  ];

  const recommendations = [
    "Сократить использование одноразового пластика",
    "Пользоваться многоразовыми бутылками и пакетами",
    "Поддерживать очистные сооружения и участие в акциях по уборке берегов",
    "Информировать других о влиянии загрязнений на экосистемы"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl float-animation" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="mb-8 animate-scale-in">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/90 shadow-2xl mb-6">
              <Icon name="Waves" size={48} className="text-primary" />
            </div>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 animate-fade-in tracking-tight drop-shadow-2xl">
            Лолита
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/90 font-semibold animate-fade-in drop-shadow-lg" style={{animationDelay: '0.2s'}}>
            Спасение Мирового океана
          </p>
        </div>

        <div className="wave-divider">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="white"></path>
          </svg>
        </div>
      </section>

      <section id="goal" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Icon name="Target" size={64} className="text-primary mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">Цель проекта</h2>
            <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full"></div>
          </div>

          <Card className="border-2 border-secondary shadow-2xl bg-gradient-to-br from-secondary/5 to-accent/20 animate-fade-in mb-16" style={{animationDelay: '0.1s'}}>
            <CardContent className="p-10 text-center">
              <Icon name="Heart" size={56} className="text-primary mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-primary mb-4">Наша миссия</h3>
              <p className="text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto font-semibold">
                Узнать, как загрязнение вод Мирового океана влияет на его обитателей, и сохранить здоровье океанов 
                путем сокращения загрязнений и изменения потребительского поведения.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="AlertTriangle" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Проблема</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Загрязнение Мирового океана негативно влияет на его обитателей. Животные страдают от химикатов 
                  (нефтепродукты, хлорорганические соединения, тяжелые металлы) и сточных вод, а также запутываются 
                  в мусоре, что приводит к голоду, травмам и смерти.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingDown" size={24} className="text-destructive" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Последствия</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Нарушает экосистемы и сокращает биоразнообразие. Животные гибнут, запутываясь в сетях и мусоре, 
                  проглатывая пластик, или из‑за отравления токсичными веществами. Химические и органические 
                  загрязнители вызывают «цветение» воды, что приводит к нехватке кислорода.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/5 to-secondary/10 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <CardContent className="p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Anchor" size={32} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary">Основные районы рыболовства</h3>
              </div>
              
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                Эти районы являются крупнейшими по объемам вылова из-за большого скопления рыбных ресурсов:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {fishingAreas.map((area, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-white/80 border border-primary/10 hover:border-primary/30 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="MapPin" size={18} className="text-white" />
                    </div>
                    <p className="text-base text-gray-800 font-medium leading-relaxed">
                      {area}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="solutions" className="py-24 px-4 bg-gradient-to-b from-white to-accent/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 left-0 w-full h-64 bg-secondary rounded-full blur-3xl wave-animation"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Icon name="Lightbulb" size={64} className="text-primary mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">6 шагов для спасения океанов</h2>
            <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <Card 
                key={index}
                className="border-2 border-primary/20 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in bg-white"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-3xl font-bold mb-6 shadow-lg">
                    {solution.number}
                  </div>
                  <div className="mb-4">
                    <Icon name={solution.icon as any} size={40} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 leading-tight">
                    {solution.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-primary shadow-2xl bg-white animate-fade-in" style={{animationDelay: '0.4s'}}>
            <CardContent className="p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="CheckCircle2" size={32} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary">Рекомендации</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {recommendations.map((recommendation, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Check" size={20} className="text-white" />
                    </div>
                    <p className="text-lg text-gray-800 font-medium leading-relaxed">
                      {recommendation}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/95 rounded-3xl p-12 shadow-2xl animate-scale-in">
            <Icon name="Sparkles" size={64} className="text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Вывод</h2>
            <p className="text-2xl text-gray-800 font-semibold leading-relaxed mb-4">
              Не загрязняйте воды Мирового океана!
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              И помогайте предотвратить это вместе с нами!
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Icon name="Waves" size={48} className="mx-auto mb-4 opacity-80" />
          <p className="text-xl font-semibold mb-2">Вместе мы можем спасти океаны</p>
          <p className="text-white/80">Каждое действие имеет значение 🌊</p>
        </div>
      </footer>
    </div>
  );
}