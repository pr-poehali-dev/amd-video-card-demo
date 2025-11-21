import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const gpuData = [
  {
    id: 1,
    name: 'Radeon RX 7900 XTX',
    series: 'RX 7900',
    price: '$999',
    image: 'https://cdn.poehali.dev/projects/2eecca73-bc92-4923-a4e9-00d4383a3eaf/files/57d22620-d56a-406c-b803-cab47cbdfa36.jpg',
    cores: '6144',
    memory: '24GB GDDR6',
    clock: '2.5 GHz',
    power: '355W',
    raytracing: true,
    new: true,
    featured: true
  },
  {
    id: 2,
    name: 'Radeon RX 7900 XT',
    series: 'RX 7900',
    price: '$849',
    image: 'https://cdn.poehali.dev/projects/2eecca73-bc92-4923-a4e9-00d4383a3eaf/files/57d22620-d56a-406c-b803-cab47cbdfa36.jpg',
    cores: '5376',
    memory: '20GB GDDR6',
    clock: '2.4 GHz',
    power: '315W',
    raytracing: true,
    new: true,
    featured: false
  },
  {
    id: 3,
    name: 'Radeon RX 7800 XT',
    series: 'RX 7800',
    price: '$499',
    image: 'https://cdn.poehali.dev/projects/2eecca73-bc92-4923-a4e9-00d4383a3eaf/files/68f8ba15-ec41-4e0a-aee3-8c60eb08cbf9.jpg',
    cores: '3840',
    memory: '16GB GDDR6',
    clock: '2.43 GHz',
    power: '263W',
    raytracing: true,
    new: true,
    featured: false
  },
  {
    id: 4,
    name: 'Radeon RX 7700 XT',
    series: 'RX 7700',
    price: '$449',
    image: 'https://cdn.poehali.dev/projects/2eecca73-bc92-4923-a4e9-00d4383a3eaf/files/68f8ba15-ec41-4e0a-aee3-8c60eb08cbf9.jpg',
    cores: '3456',
    memory: '12GB GDDR6',
    clock: '2.54 GHz',
    power: '245W',
    raytracing: true,
    new: false,
    featured: false
  },
  {
    id: 5,
    name: 'Radeon RX 7600',
    series: 'RX 7600',
    price: '$269',
    image: 'https://cdn.poehali.dev/projects/2eecca73-bc92-4923-a4e9-00d4383a3eaf/files/456e62ec-8867-4f67-b9de-8e0b6a7a0dc5.jpg',
    cores: '2048',
    memory: '8GB GDDR6',
    clock: '2.65 GHz',
    power: '165W',
    raytracing: true,
    new: false,
    featured: false
  },
  {
    id: 6,
    name: 'Radeon RX 7600 XT',
    series: 'RX 7600',
    price: '$329',
    image: 'https://cdn.poehali.dev/projects/2eecca73-bc92-4923-a4e9-00d4383a3eaf/files/456e62ec-8867-4f67-b9de-8e0b6a7a0dc5.jpg',
    cores: '2560',
    memory: '16GB GDDR6',
    clock: '2.76 GHz',
    power: '190W',
    raytracing: true,
    new: true,
    featured: false
  }
];

export default function Index() {
  const [selectedGpu, setSelectedGpu] = useState(gpuData[0]);
  const [activeTab, setActiveTab] = useState('all');

  const featuredGpu = gpuData.find(gpu => gpu.featured);
  const newGpus = gpuData.filter(gpu => gpu.new);

  const filteredGpus = activeTab === 'all' 
    ? gpuData 
    : activeTab === 'new' 
    ? newGpus 
    : gpuData.filter(gpu => gpu.series === activeTab);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold">
                <span className="text-primary">AMD</span>
                <span className="text-foreground ml-2">Radeon</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#hero" className="text-muted-foreground hover:text-foreground transition-colors">Главная</a>
              <a href="#catalog" className="text-muted-foreground hover:text-foreground transition-colors">Каталог</a>
              <a href="#new" className="text-muted-foreground hover:text-foreground transition-colors">Новинки</a>
              <a href="#specs" className="text-muted-foreground hover:text-foreground transition-colors">Характеристики</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Купить
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge className="bg-primary/20 text-primary border-primary/30 text-sm px-4 py-1">
                Новое поколение RDNA 3
              </Badge>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                {featuredGpu?.name}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Революционная архитектура, беспрецедентная производительность. 
                Погрузитесь в мир игр 4K с трассировкой лучей.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">{featuredGpu?.cores}</div>
                  <div className="text-sm text-muted-foreground">Потоковых процессоров</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">{featuredGpu?.memory}</div>
                  <div className="text-sm text-muted-foreground">Памяти</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">{featuredGpu?.clock}</div>
                  <div className="text-sm text-muted-foreground">Частота</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">{featuredGpu?.power}</div>
                  <div className="text-sm text-muted-foreground">TDP</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Купить за {featuredGpu?.price}
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl animate-glow" />
              <img 
                src={featuredGpu?.image} 
                alt={featuredGpu?.name}
                className="relative z-10 w-full drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Каталог видеокарт</h2>
            <p className="text-xl text-muted-foreground">Выберите идеальную карту для ваших задач</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 h-14">
              <TabsTrigger value="all" className="text-base">Все</TabsTrigger>
              <TabsTrigger value="new" className="text-base">Новинки</TabsTrigger>
              <TabsTrigger value="RX 7900" className="text-base">7900</TabsTrigger>
              <TabsTrigger value="RX 7800" className="text-base">7800</TabsTrigger>
              <TabsTrigger value="RX 7600" className="text-base">7600</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGpus.map((gpu, index) => (
              <Card 
                key={gpu.id} 
                className="group overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer animate-fade-in bg-card/50 backdrop-blur"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedGpu(gpu)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden bg-secondary/50">
                    {gpu.new && (
                      <Badge className="absolute top-4 right-4 z-10 bg-primary text-white border-0">
                        Новинка
                      </Badge>
                    )}
                    <img 
                      src={gpu.image} 
                      alt={gpu.name}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{gpu.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Zap" size={16} className="text-primary" />
                        {gpu.cores} потоковых процессоров
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Database" size={16} className="text-accent" />
                        {gpu.memory}
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Gauge" size={16} className="text-accent" />
                        {gpu.clock}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-3xl font-bold text-primary">{gpu.price}</span>
                      <Button className="bg-primary hover:bg-primary/90">
                        Купить
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="new" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Новинки 2024</h2>
            <p className="text-xl text-muted-foreground">Последние релизы AMD Radeon</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {newGpus.slice(0, 3).map((gpu, index) => (
              <div 
                key={gpu.id}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-secondary/50 p-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative bg-card rounded-xl overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10" />
                  <img 
                    src={gpu.image} 
                    alt={gpu.name}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 z-20 p-6 w-full">
                    <Badge className="mb-3 bg-primary text-white border-0">Новинка</Badge>
                    <h3 className="text-2xl font-bold mb-2">{gpu.name}</h3>
                    <p className="text-muted-foreground mb-4">{gpu.memory} • {gpu.cores} SP</p>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="specs" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Характеристики</h2>
            <p className="text-xl text-muted-foreground">Сравните производительность видеокарт</p>
          </div>

          <Card className="overflow-hidden bg-card/50 backdrop-blur border-border/50">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary/50">
                    <tr className="border-b border-border">
                      <th className="text-left p-6 font-bold">Модель</th>
                      <th className="text-left p-6 font-bold">
                        <div className="flex items-center gap-2">
                          <Icon name="Cpu" size={18} className="text-primary" />
                          Процессоры
                        </div>
                      </th>
                      <th className="text-left p-6 font-bold">
                        <div className="flex items-center gap-2">
                          <Icon name="Database" size={18} className="text-primary" />
                          Память
                        </div>
                      </th>
                      <th className="text-left p-6 font-bold">
                        <div className="flex items-center gap-2">
                          <Icon name="Gauge" size={18} className="text-primary" />
                          Частота
                        </div>
                      </th>
                      <th className="text-left p-6 font-bold">
                        <div className="flex items-center gap-2">
                          <Icon name="Zap" size={18} className="text-primary" />
                          TDP
                        </div>
                      </th>
                      <th className="text-left p-6 font-bold">Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gpuData.map((gpu, index) => (
                      <tr 
                        key={gpu.id} 
                        className="border-b border-border hover:bg-secondary/30 transition-colors cursor-pointer"
                        onClick={() => setSelectedGpu(gpu)}
                      >
                        <td className="p-6">
                          <div className="flex items-center gap-4">
                            <img src={gpu.image} alt={gpu.name} className="w-16 h-16 object-cover rounded" />
                            <div>
                              <div className="font-bold">{gpu.name}</div>
                              {gpu.new && <Badge className="mt-1 bg-primary/20 text-primary border-primary/30 text-xs">NEW</Badge>}
                            </div>
                          </div>
                        </td>
                        <td className="p-6 font-mono text-primary">{gpu.cores}</td>
                        <td className="p-6">{gpu.memory}</td>
                        <td className="p-6">{gpu.clock}</td>
                        <td className="p-6">{gpu.power}</td>
                        <td className="p-6 font-bold text-lg text-primary">{gpu.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
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
