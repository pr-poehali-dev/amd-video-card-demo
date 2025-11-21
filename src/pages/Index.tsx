import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('overview');

  const rx7600 = {
    name: 'Radeon RX 7600',
    tagline: 'Максимальная производительность для 1080p гейминга',
    price: '₽24,990',
    image: 'https://cdn.poehali.dev/projects/2eecca73-bc92-4923-a4e9-00d4383a3eaf/files/cf2e542c-789c-4d8b-9c26-cd9b971edae6.jpg',
    hero: 'https://cdn.poehali.dev/projects/2eecca73-bc92-4923-a4e9-00d4383a3eaf/files/456e62ec-8867-4f67-b9de-8e0b6a7a0dc5.jpg',
    specs: {
      architecture: 'RDNA 3',
      process: '6nm + 5nm',
      cores: 2048,
      computeUnits: 32,
      memory: '8GB GDDR6',
      memoryBus: '128-bit',
      baseClock: '1720 MHz',
      boostClock: '2655 MHz',
      memoryClock: '18 Gbps',
      bandwidth: '288 GB/s',
      tdp: '165W',
      pcie: 'PCIe 4.0 x8',
      displayPorts: '3x DisplayPort 2.1, 1x HDMI 2.1',
      directX: 'DirectX 12 Ultimate',
      raytracing: 'Да (2-го поколения)',
      fsr: 'FSR 3.0'
    },
    benchmarks: [
      { game: 'Cyberpunk 2077', fps1080p: 68, fps1440p: 45, quality: 'Ultra' },
      { game: 'Spider-Man Remastered', fps1080p: 95, fps1440p: 62, quality: 'Very High' },
      { game: 'Hogwarts Legacy', fps1080p: 72, fps1440p: 48, quality: 'High' },
      { game: 'Call of Duty MW III', fps1080p: 125, fps1440p: 85, quality: 'Ultra' },
      { game: 'Fortnite', fps1080p: 165, fps1440p: 110, quality: 'Epic' },
      { game: 'Apex Legends', fps1080p: 180, fps1440p: 120, quality: 'Max' }
    ],
    features: [
      {
        icon: 'Zap',
        title: 'RDNA 3 Архитектура',
        description: 'Новейшая архитектура с улучшенной энергоэффективностью и производительностью'
      },
      {
        icon: 'Sparkles',
        title: 'Ray Tracing 2.0',
        description: 'Аппаратная трассировка лучей второго поколения для реалистичного освещения'
      },
      {
        icon: 'Gauge',
        title: 'AMD FidelityFX Super Resolution 3',
        description: 'Технология апскейлинга с генерацией кадров для максимального FPS'
      },
      {
        icon: 'TrendingUp',
        title: 'AMD Smart Access Memory',
        description: 'Увеличение производительности за счет прямого доступа к памяти GPU'
      },
      {
        icon: 'Tv',
        title: 'DisplayPort 2.1 & HDMI 2.1',
        description: 'Поддержка 4K@240Hz и 8K@60Hz для современных мониторов'
      },
      {
        icon: 'Leaf',
        title: 'Энергоэффективность',
        description: 'Всего 165W TDP при высокой производительности'
      }
    ],
    comparison: [
      { model: 'RTX 4060', performance: 95, price: 27990 },
      { model: 'RX 7600', performance: 100, price: 24990 },
      { model: 'RTX 3060', performance: 88, price: 29990 },
      { model: 'RX 6600 XT', performance: 82, price: 22990 }
    ]
  };

  const maxFps = Math.max(...rx7600.benchmarks.map(b => b.fps1080p));

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold">
                <span className="text-primary">AMD</span>
                <span className="text-foreground ml-2">Radeon RX 7600</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#overview" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Обзор</a>
              <a href="#specs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Характеристики</a>
              <a href="#benchmarks" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Тесты</a>
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Возможности</a>
              <a href="#comparison" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Сравнение</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Купить за {rx7600.price}
            </Button>
          </div>
        </div>
      </nav>

      <section id="overview" className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/20 text-primary border-primary/30 text-sm px-4 py-1.5">
                RDNA 3 • 1080p Gaming Champion
              </Badge>
              <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
                {rx7600.name}
              </h1>
              <p className="text-2xl text-muted-foreground font-light">
                {rx7600.tagline}
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-10 h-14">
                  Купить сейчас
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-10 h-14">
                  <Icon name="Download" size={20} className="mr-2" />
                  Драйверы
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">{rx7600.specs.cores}</div>
                  <div className="text-sm text-muted-foreground">Stream Processors</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">{rx7600.specs.boostClock}</div>
                  <div className="text-sm text-muted-foreground">Boost Clock</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">{rx7600.specs.memory}</div>
                  <div className="text-sm text-muted-foreground">GDDR6 Memory</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 blur-[100px] animate-glow" />
              <img 
                src={rx7600.image} 
                alt={rx7600.name}
                className="relative z-10 w-full drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="specs" className="py-16 px-6 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Технические характеристики</h2>
            <p className="text-xl text-muted-foreground">Полная спецификация AMD Radeon RX 7600</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-border/50 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Cpu" size={24} className="text-primary" />
                  Архитектура
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Архитектура</span>
                  <span className="font-semibold">{rx7600.specs.architecture}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Процесс</span>
                  <span className="font-semibold">{rx7600.specs.process}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Compute Units</span>
                  <span className="font-semibold">{rx7600.specs.computeUnits}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Stream Proc.</span>
                  <span className="font-semibold">{rx7600.specs.cores}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Gauge" size={24} className="text-primary" />
                  Частоты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Base Clock</span>
                  <span className="font-semibold">{rx7600.specs.baseClock}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Boost Clock</span>
                  <span className="font-semibold text-primary">{rx7600.specs.boostClock}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Memory Clock</span>
                  <span className="font-semibold">{rx7600.specs.memoryClock}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bandwidth</span>
                  <span className="font-semibold">{rx7600.specs.bandwidth}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Database" size={24} className="text-primary" />
                  Память
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Объем</span>
                  <span className="font-semibold">{rx7600.specs.memory}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Шина</span>
                  <span className="font-semibold">{rx7600.specs.memoryBus}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Пропускная</span>
                  <span className="font-semibold">{rx7600.specs.bandwidth}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">PCIe</span>
                  <span className="font-semibold">{rx7600.specs.pcie}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Zap" size={24} className="text-primary" />
                  Питание
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">TDP</span>
                  <span className="font-semibold text-xl text-primary">{rx7600.specs.tdp}</span>
                </div>
                <Separator />
                <div className="text-sm text-muted-foreground">
                  Рекомендуемый БП: 550W
                </div>
                <Separator />
                <div className="text-sm text-muted-foreground">
                  Питание: 1x 8-pin
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Monitor" size={24} className="text-primary" />
                  Дисплеи
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <div className="font-semibold mb-2">Выходы:</div>
                  <div className="text-muted-foreground">{rx7600.specs.displayPorts}</div>
                </div>
                <Separator />
                <div className="text-sm">
                  <div className="font-semibold mb-1">Разрешения:</div>
                  <div className="text-muted-foreground">4K@240Hz, 8K@60Hz</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Sparkles" size={24} className="text-primary" />
                  Технологии
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">DirectX</span>
                  <span className="font-semibold">{rx7600.specs.directX}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ray Tracing</span>
                  <Badge className="bg-primary/20 text-primary border-0 text-xs">{rx7600.specs.raytracing}</Badge>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">FSR</span>
                  <Badge className="bg-accent/20 text-accent border-0 text-xs">{rx7600.specs.fsr}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="benchmarks" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Производительность в играх</h2>
            <p className="text-xl text-muted-foreground">Результаты тестирования в популярных играх</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {rx7600.benchmarks.map((benchmark, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur border-border/50 animate-fade-in hover:border-primary/50 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-[1fr_auto_auto] gap-6 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{benchmark.game}</h3>
                      <Badge variant="outline" className="text-xs">{benchmark.quality} Settings</Badge>
                    </div>
                    <div className="space-y-4 flex-1 max-w-md">
                      <div>
                        <div className="flex justify-between mb-2 text-sm">
                          <span className="text-muted-foreground">1080p</span>
                          <span className="font-bold text-primary text-lg">{benchmark.fps1080p} FPS</span>
                        </div>
                        <Progress 
                          value={(benchmark.fps1080p / maxFps) * 100} 
                          className="h-3"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2 text-sm">
                          <span className="text-muted-foreground">1440p</span>
                          <span className="font-bold text-accent text-lg">{benchmark.fps1440p} FPS</span>
                        </div>
                        <Progress 
                          value={(benchmark.fps1440p / maxFps) * 100} 
                          className="h-3"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {benchmark.fps1080p >= 100 ? (
                        <Icon name="CheckCircle2" size={32} className="text-green-500" />
                      ) : (
                        <Icon name="Check" size={32} className="text-primary" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              * Тестирование проведено на системе: Ryzen 7 5800X3D, 32GB DDR4-3600, Windows 11, последние драйверы
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 px-6 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Ключевые возможности</h2>
            <p className="text-xl text-muted-foreground">Технологии AMD для максимальной производительности</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {rx7600.features.map((feature, index) => (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={feature.icon as any} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="comparison" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Сравнение с конкурентами</h2>
            <p className="text-xl text-muted-foreground">RX 7600 vs другие карты среднего сегмента</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-border/50 overflow-hidden">
              <CardContent className="p-8 space-y-6">
                {rx7600.comparison.map((item, index) => (
                  <div key={index} className="space-y-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className={`text-xl font-bold ${item.model === 'RX 7600' ? 'text-primary' : ''}`}>
                          {item.model}
                        </span>
                        {item.model === 'RX 7600' && (
                          <Badge className="bg-primary text-white border-0">Лучшая цена</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-6">
                        <span className="text-2xl font-bold">₽{item.price.toLocaleString()}</span>
                        <span className="text-sm text-muted-foreground w-24 text-right">
                          {item.performance}% производительность
                        </span>
                      </div>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={item.performance} 
                        className={`h-4 ${item.model === 'RX 7600' ? 'bg-primary/20' : ''}`}
                      />
                      {item.model === 'RX 7600' && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 pointer-events-none" />
                      )}
                    </div>
                    {index < rx7600.comparison.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-5xl font-bold">Готовы к апгрейду?</h2>
            <p className="text-xl text-muted-foreground">
              AMD Radeon RX 7600 — идеальный выбор для современного гейминга в Full HD
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12 h-16">
                Купить за {rx7600.price}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-12 h-16">
                Где купить?
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl font-bold text-primary">AMD</span>
            <span className="text-2xl font-bold">Radeon</span>
          </div>
          <p>© 2024 AMD. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
