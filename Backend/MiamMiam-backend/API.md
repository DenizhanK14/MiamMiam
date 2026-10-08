# API MiamMiam

## POST /auth/register
- Description : Cree un compte et renvoie un token (l'utilisateur est directement connecte)
- Reponse :
  - 400 : Erreur dans le body
  - 409 : Email deja utilise
  - 500 : Erreur du token
  - 201 : User cree
    - Body : Token envoye