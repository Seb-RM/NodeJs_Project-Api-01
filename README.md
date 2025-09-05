# 🚀 NodeJs_Project-Api-01

Bienvenido a **NodeJs_Project-Api-01**, una API RESTful desarrollada con **Node.js** y **Express**, pensada para gestionar usuarios, productos, clientes y categorías en un entorno moderno y escalable.  
Este proyecto es ideal para aprender y practicar conceptos avanzados de desarrollo backend, integración con bases de datos y buenas prácticas en la construcción de APIs.

---

## 📝 Descripción

Esta aplicación expone una API que permite realizar operaciones **CRUD** (Crear, Leer, Actualizar, Eliminar) sobre diferentes entidades: **usuarios**, **productos**, **clientes** y **categorías**.  
Utiliza **Sequelize** como ORM para interactuar con bases de datos relacionales (**PostgreSQL** y **MySQL**), y está preparada para ejecutarse en entornos **Docker**, facilitando la gestión y despliegue.

## ✨ Características

- API RESTful con rutas bien estructuradas y validadas.  
- Integración con bases de datos **PostgreSQL** y **MySQL** mediante **Sequelize**.  
- Migraciones y seeders para gestión de datos y estructura.  
- Validación de datos con **Joi** y middlewares personalizados.  
- Manejo avanzado de errores con **Boom**.  
- Configuración flexible mediante archivos `.env`.  
- Listo para desarrollo local y despliegue con **Docker**.  

## ⚙️ Funcionamiento General

La API está organizada en módulos que representan las entidades principales:

- **Usuarios**: Registro, consulta y gestión de usuarios.  
- **Productos**: Listado, creación, edición y eliminación de productos.  
- **Clientes**: Gestión de clientes y sus relaciones con usuarios.  
- **Categorías**: Organización de productos por categorías.  

Cada módulo cuenta con:

- **Modelo Sequelize**: Define la estructura y relaciones de la entidad.  
- **Servicio**: Implementa la lógica de negocio y acceso a datos.  
- **Ruta**: Expone los endpoints y gestiona las respuestas HTTP.  

Ejemplo destacado: Servicio de Productos

```js
const getAllProducts = async (req) => {
  try {
    // Genera productos de ejemplo usando faker
    const products = [];
    const { size } = req.query;
    const limit = size || 5;
    for (let index = 0; index < limit; index++) {
      products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
    return products;
  } catch (error) {
    throw new Error("Error al obtener productos");
  }
};
```

Este fragmento muestra cómo se generan productos de ejemplo y se maneja el error de forma profesional.

## 🛠️ Tecnologías Utilizadas

- **Node.js**: Motor principal de ejecución.  
- **Express**: Framework para la creación de APIs.  
- **Sequelize**: ORM para bases de datos relacionales.  
- **PostgreSQL & MySQL**: Bases de datos soportadas.  
- **Docker**: Contenedores para desarrollo y despliegue.  
- **Joi**: Validación de datos en rutas.  
- **Boom**: Manejo avanzado de errores.  
- **dotenv**: Carga de variables de entorno.  
- **Faker**: Generación de datos de ejemplo.  

## 📦 Dependencias Principales

| Paquete   | Utilidad              | Ubicación en el código       |
|-----------|-----------------------|------------------------------|
| **express**   | Servidor y rutas        | `index.js`, `routes/`        |
| **sequelize** | ORM y migraciones       | `models/`, `config.js`       |
| **pg**, **mysql2** | Drivers de BD           | Conexión en `libs/`          |
| **dotenv**    | Variables de entorno     | `config.js`                  |
| **joi**       | Validación              | `schema/`                    |
| **boom**      | Manejo de errores       | `error.handler.js`           |
| **faker**     | Datos de ejemplo        | `servicesProducts.js`        |

## 🖥️ Instrucciones de Uso

1. **Clona el repositorio**  

   ```bash
   git clone https://github.com/Seb-RM/NodeJs_Project-Api-01.git
    cd NodeJs_Project-Api-01
    ```

2. **Instala las dependencias**

    ```bash
    npm install
    ```

3. **Configura tu entorno**

    - Copia `.env.example` a `.env` y completa tus datos de conexión.  
    - Si usas **Docker**, copia `docker-compose.example.yml` a `docker-compose.yml` y ajusta los valores.  

4. **Levanta los servicios con Docker (opcional)**

     ```bash
    docker-compose up -d
    ```

5. **Ejecuta migraciones y seeders**

    ```bash
    npm run migrations:run
    npm run seeders:run
    ```

6. **Inicia la API**

     ```bash
    npm start
    ```

7. **Accede a la API en `http://localhost:3000/`**

## 🧩 Otras secciones útiles

### 🔒 Seguridad
- No subas tu archivo `.env` al repositorio.  
- Usa contraseñas seguras y cambia las de ejemplo.  

### 🐳 Docker
- Los contenedores de base de datos persisten datos en las carpetas `postgres_data` y `mysql_data`.  
- Puedes administrar la base de datos con **PgAdmin** y **PhpMyAdmin** incluidos en el `docker-compose.yml`.  

### 🧪 Testing
- Incluye pruebas end-to-end en la carpeta `test/`.  

### 📚 Documentación adicional
- Revisa los comentarios en el código para entender la lógica de cada módulo.  
- Consulta la documentación oficial de cada dependencia para ampliar conocimientos.  
