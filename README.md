# QuickApp Haiti — SaaS Comptabilité

Plateforme SaaS comptable inspirée de QuickBooks, optimisée pour Haïti (HTG/USD/EUR, usage mobile, connectivité instable, flux Cash/Mobile Money).

## Monorepo

- `apps/web` : Frontend Next.js (PWA)
- `apps/desktop` : App PC Electron
- `apps/api` : Backend NestJS (REST + GraphQL)
- `apps/mobile` : App React Native (Expo)
- `packages/shared` : types/contrats partagés
- `docs` : architecture, UML, business, roadmap

## Démarrage rapide

1. Copier `.env.example` vers `.env`
2. Lancer la base locale :
   - `docker compose up -d`
3. Installer les dépendances :
   - `npm install`
4. Lancer les apps :
   - API: `npm run dev:api`
   - Web: `npm run dev:web`
   - Desktop: `npm run dev:desktop` (apres `npm run dev:web`)
   - Mobile: `npm run dev:mobile`

## Positionnement

- Cible: PME, commerçants, ONG, freelances, cabinets comptables
- Modèle: Abonnement Free / Pro / Business
- Conformité: privacy-by-design, archivage légal, auditabilité

## Backend - Profil entreprise

- `GET /api/v1/organization/profile` : lire le profil de l'entreprise active
- `PATCH /api/v1/organization/profile` : mettre a jour le profil (ex: nom, devise)

Exemple payload:

```json
{
   "companyName": "Ma Societe SARL",
   "baseCurrency": "HTG"
}
```
