import Link from "next/link";
import {
  BarChart3,
  Brain,
  CheckCircle,
  Code,
  Database,
  LineChart,
  MessageSquare,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted/20 px-3 py-1 text-sm text-bydata-primary">
                  Servicios
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-bydata-primary sm:text-5xl">
                  Nuestros Servicios
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos soluciones integrales para todas tus necesidades de
                  datos y marketing digital.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="border-bydata-primary/20">
                <CardHeader className="flex flex-row items-center gap-4">
                  <BarChart3 className="h-8 w-8 text-bydata-primary" />
                  <div className="grid gap-1">
                    <CardTitle className="text-bydata-primary">
                      Análisis de Datos & BI
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Transformamos grandes volúmenes de datos en información
                    estratégica. Creamos dashboards interactivos que permiten
                    monitorear métricas y KPIs en tiempo real.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-bydata-primary/20">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Brain className="h-8 w-8 text-bydata-gold" />
                  <div className="grid gap-1">
                    <CardTitle className="text-bydata-primary">
                      Machine Learning
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Desarrollamos modelos predictivos que anticipan tendencias y
                    comportamientos futuros. Optimizamos procesos y descubrimos
                    oportunidades de negocio.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-bydata-primary/20">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Database className="h-8 w-8 text-bydata-accent" />
                  <div className="grid gap-1">
                    <CardTitle className="text-bydata-primary">
                      Limpieza de Datos
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Garantizamos que tus datos sean precisos y estén bien
                    estructurados. Utilizamos herramientas como SQL para
                    organizar y depurar datasets.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-bydata-primary/20">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Zap className="h-8 w-8 text-bydata-gold" />
                  <div className="grid gap-1">
                    <CardTitle className="text-bydata-primary">
                      Automatización
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Implementamos soluciones que automatizan la recopilación,
                    procesamiento y actualización de datos. Reducimos errores y
                    ahorramos tiempo.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-bydata-primary/20">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Code className="h-8 w-8 text-bydata-accent" />
                  <div className="grid gap-1">
                    <CardTitle className="text-bydata-primary">
                      Desarrollo Web
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Diseñamos y desarrollamos sitios web personalizados que
                    reflejan la identidad de tu marca. Ofrecemos una experiencia
                    de usuario intuitiva y atractiva.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-bydata-primary/20">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Search className="h-8 w-8 text-bydata-gold" />
                  <div className="grid gap-1">
                    <CardTitle className="text-bydata-primary">
                      Optimización SEO
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Mejoramos la visibilidad de tu sitio web en los motores de
                    búsqueda. Aumentamos el tráfico orgánico y potenciamos tu
                    presencia online.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="md:col-span-2 lg:col-span-3 border-bydata-primary/20">
                <CardHeader className="flex flex-row items-center gap-4">
                  <MessageSquare className="h-8 w-8 text-bydata-accent" />
                  <div className="grid gap-1">
                    <CardTitle className="text-bydata-primary">
                      Marketing Digital
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Creamos campañas de marketing digital adaptadas a tus
                    objetivos. Desde la gestión de redes sociales hasta
                    publicidad pagada, te ayudamos a conectar con tu audiencia y
                    aumentar tu alcance.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="process"
          className="w-full py-12 md:py-24 lg:py-32 bg-bydata-secondary/5"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm text-bydata-primary">
                  Metodología
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-bydata-primary sm:text-5xl">
                  ¿Cómo Trabajamos?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  En nuestra consultoría, nos enfocamos en ofrecer soluciones
                  personalizadas basadas en un proceso claro y eficiente.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 mt-12">
              <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                <div className="flex flex-col items-center gap-2 md:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bydata-accent text-white">
                    <Database className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-bydata-primary">
                    Extracción Automática de Datos
                  </h3>
                  <p className="text-muted-foreground">
                    Comenzamos extrayendo datos de diversas fuentes, como tus
                    sitios web, bases de datos o aplicaciones, utilizando APIs o
                    conectores directos. Esto nos permite integrar la
                    información de manera automática y constante en la nube.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 md:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bydata-gold text-white">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-bydata-primary">
                    Limpieza y Calidad de Datos
                  </h3>
                  <p className="text-muted-foreground">
                    Una vez que los datos están en la nube, nos aseguramos de
                    que estén bien organizados y sean confiables. Mediante
                    herramientas como SQL y procesos automatizados de
                    depuración, limpiamos y validamos los datos.
                  </p>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                <div className="flex flex-col items-center gap-2 md:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bydata-gold text-white">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-bydata-primary">
                    Análisis de Datos y Creación de Modelos
                  </h3>
                  <p className="text-muted-foreground">
                    Utilizando los datos limpios y procesados, aplicamos modelos
                    analíticos y de Machine Learning para descubrir patrones,
                    hacer predicciones y evaluar tendencias futuras. Esto nos
                    permite crear insights clave.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 md:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bydata-accent text-white">
                    <LineChart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-bydata-primary">
                    Generación de Métricas y Dashboards
                  </h3>
                  <p className="text-muted-foreground">
                    Finalmente, transformamos los datos y resultados del
                    análisis en métricas claras y visuales. Creamos dashboards
                    interactivos con herramientas como Power BI o Tableau, donde
                    puedes monitorear KPIs y métricas clave en tiempo real.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cases" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted/20 px-3 py-1 text-sm text-bydata-primary">
                  Casos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-bydata-primary sm:text-5xl">
                  Ejemplos de Proceso en Acción
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conoce cómo aplicamos nuestra metodología en casos reales.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 mt-12">
              <Card className="border-bydata-accent/20">
                <CardHeader>
                  <CardTitle className="text-bydata-accent">
                    Caso 1: Análisis de Ventas de E-commerce
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Imagina que tu empresa tiene una tienda en línea. Utilizamos
                    la API de tu plataforma de e-commerce para extraer
                    automáticamente los datos de ventas, productos y clientes.
                    Estos datos se cargan en la nube para su limpieza y
                    validación. Luego, creamos modelos de machine learning para
                    predecir las ventas futuras y generar recomendaciones
                    personalizadas. Finalmente, presentamos estos resultados en
                    un dashboard con KPIs clave, como la tasa de conversión, el
                    valor promedio de pedido y la predicción de ventas
                    mensuales.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-bydata-gold/20">
                <CardHeader>
                  <CardTitle className="text-bydata-gold">
                    Caso 2: Optimización de Marketing Digital
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Si estás ejecutando campañas de marketing digital, extraemos
                    automáticamente los datos de rendimiento de plataformas como
                    Google Ads o Facebook Ads mediante sus APIs. Después,
                    limpiamos y procesamos estos datos, generamos análisis para
                    identificar qué anuncios están siendo más efectivos y
                    predecimos el rendimiento futuro de nuevas campañas. Los
                    resultados se muestran en dashboards visuales donde puedes
                    ver el retorno de inversión (ROI) y otros KPIs relevantes
                    para optimizar tus campañas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="why-us"
          className="w-full py-12 md:py-24 lg:py-32 bg-bydata-secondary/5"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm text-bydata-primary">
                  Ventajas
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-bydata-primary sm:text-5xl">
                  ¿Por qué Elegirnos?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre las ventajas de trabajar con Bydata.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 mt-12">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bydata-gold text-white">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-bydata-primary">
                    Enfoque Integral
                  </h3>
                  <p className="text-muted-foreground">
                    Desde la extracción de datos hasta la creación de dashboards
                    interactivos, cubrimos todas las fases del proceso.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bydata-accent text-white">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-bydata-primary">
                    Automatización Eficiente
                  </h3>
                  <p className="text-muted-foreground">
                    Eliminamos la intervención manual mediante procesos
                    automatizados, lo que garantiza datos actualizados y reduce
                    errores.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bydata-gold text-white">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-bydata-primary">
                    Soluciones Personalizadas
                  </h3>
                  <p className="text-muted-foreground">
                    Adaptamos nuestras soluciones a las necesidades específicas
                    de tu negocio para ofrecer resultados que marcan la
                    diferencia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted/20 px-3 py-1 text-sm text-bydata-primary">
                  Contacto
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-bydata-primary sm:text-5xl">
                  Contáctanos
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ¿Listo para llevar tu negocio al siguiente nivel? Ponte en
                  contacto con nosotros y descubre cómo podemos ayudarte.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 mt-12">
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="bg-background border-bydata-accent/20">
                  <CardHeader>
                    <CardTitle className="text-bydata-primary">Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Bydata@tudominio.com
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background border-bydata-accent/20">
                  <CardHeader>
                    <CardTitle className="text-bydata-primary">
                      Teléfono
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">+123 456 789</p>
                  </CardContent>
                </Card>
                <Card className="bg-background border-bydata-accent/20">
                  <CardHeader>
                    <CardTitle className="text-bydata-primary">
                      Dirección
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Calle Ficticia 123, Ciudad, País
                    </p>
                  </CardContent>
                </Card>
              </div>
              <Card className="bg-background border-bydata-accent/20">
                <CardHeader>
                  <CardTitle className="text-bydata-primary">
                    Envíanos un mensaje
                  </CardTitle>
                  <CardDescription>
                    Completa el formulario y nos pondremos en contacto contigo
                    lo antes posible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Nombre
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bydata-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bydata-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Asunto
                      </label>
                      <input
                        id="subject"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bydata-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Asunto del mensaje"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bydata-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tu mensaje"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-bydata-primary hover:bg-bydata-primary/90"
                    >
                      Enviar mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0 bg-bydata-primary text-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Database className="h-6 w-6" />
            <p className="text-sm">
              © 2025 Bydata. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm font-medium hover:text-bydata-gold"
            >
              Términos
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-bydata-gold"
            >
              Privacidad
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-bydata-gold"
            >
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
