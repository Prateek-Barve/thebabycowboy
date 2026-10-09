param location string = 'centralindia'
param staticWebAppName string = 'thebabycowboy-ui-dev'

resource staticWebApp 'Microsoft.Web/staticSites@2023-12-01' = {
  name: staticWebAppName
  location: location
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {}
}

output staticWebAppDeploymentToken string = listSecrets(staticWebApp.id, staticWebApp.apiVersion).properties.apiKey
output staticWebAppDefaultHostname string = staticWebApp.properties.defaultHostname