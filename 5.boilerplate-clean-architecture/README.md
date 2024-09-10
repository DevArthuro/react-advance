La arquitecura va de elementos globales usados en toda la app y elementos encapsulados

# Globales

Son las carpetas generales like models, redux, styled, components, layaouts

# Encapsuladas

En la carpeta pages esta cada una de las páginas que tendran una carpeta con el nombre de la vista y dentro va

- Components: los que componen esa vista en especifico
- models: Los tipos de esa vista en especifico
- Services: Los que hacen el llamado a la api (deben ser lo suficientemente flexibles si el endpoint llega a cambian)
- Adapter: Estos se combinan con los services y lo que hacen es intermediar el response y solo botar la data necesaria para que el servicio me responda y tener el control de esos flujos si de pronto se modifica que un dato no llegue solo es cambiar el adaptador
- Afuera de la carpeta encontramos el archivo de la vista que es el mismo nombre de la carpeta y un index que hace las veces de barril

Nota: Cada vista debe ser cargada por lazy loading para que sea lo sificientemente eficiente la app y que los componentes de esa carpeta se cargen bajo el scope asociado a la vista

# Enrrutamiento

Debe crearse una carpeta rutas donde se estructura las rutas protejidas y el flujo de la aplicacion en el archivo app solo se exponen los providers y la ruta de acceso o layout el resto debe ser externo
