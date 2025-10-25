# 🚀 Guia de Deploy - Vercel

Este guia detalha como configurar e fazer deploy do projeto BeLink na Vercel com todas as otimizações implementadas.

## 📋 Pré-requisitos

- ✅ Conta ativa na Vercel
- ✅ Repositório Git (GitHub, GitLab ou Bitbucket)
- ✅ Node.js 18+ instalado localmente

## 🔧 1. Configuração Inicial do Projeto

### 1.1 Conectar Repositório à Vercel

1. **Acesse o painel da Vercel**: https://vercel.com/dashboard
2. **Clique em "New Project"**
3. **Conecte seu repositório Git**:
   - Selecione o provedor (GitHub/GitLab/Bitbucket)
   - Autorize a conexão
   - Selecione o repositório `Be.Link`

### 1.2 Configurações do Projeto

```bash
# Framework Preset: Vite
# Build Command: npm run build
# Output Directory: dist
# Install Command: npm install
```

### 1.3 Variáveis de Ambiente

No painel da Vercel, vá em **Settings > Environment Variables** e adicione:

```env
NODE_ENV=production
VITE_APP_NAME=BeLink
VITE_APP_VERSION=1.0.0
```

## 🌐 2. Configuração de Domínio (Opcional)

### 2.1 Adicionar Domínio Personalizado

1. **No painel da Vercel**: Settings > Domains
2. **Adicione seu domínio**: `seu-dominio.com`
3. **Configure DNS no seu provedor**:

```dns
# Para domínio raiz
A Record: @ → 76.76.19.19

# Para subdomínio
CNAME Record: www → cname.vercel-dns.com
```

### 2.2 SSL Automático

- ✅ **SSL é automático** na Vercel
- ✅ **Certificados Let's Encrypt** são renovados automaticamente
- ✅ **HTTPS redirect** é habilitado por padrão

## ⚡ 3. Otimizações Implementadas

### 3.1 Performance

- ✅ **Minificação Terser**: Remove código desnecessário
- ✅ **Tree Shaking**: Elimina código não utilizado
- ✅ **Code Splitting**: Separa chunks por biblioteca
- ✅ **Compressão Gzip**: Automática na Vercel

### 3.2 Cache Strategy

```json
// vercel.json - Headers de Cache
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 3.3 Segurança

- ✅ **X-Content-Type-Options**: nosniff
- ✅ **X-Frame-Options**: DENY
- ✅ **X-XSS-Protection**: Habilitado
- ✅ **Referrer-Policy**: strict-origin-when-cross-origin
- ✅ **Permissions-Policy**: Câmera, microfone e geolocalização desabilitados

## 🔄 4. Integração Contínua (CI/CD)

### 4.1 GitHub Actions Configurado

O workflow `.github/workflows/deploy.yml` inclui:

- ✅ **Testes automatizados** em PRs
- ✅ **Deploy preview** para pull requests
- ✅ **Deploy produção** na branch main
- ✅ **Verificação de bundle size**

### 4.2 Secrets Necessários

Configure no GitHub: **Settings > Secrets and Variables > Actions**

```env
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id  
VERCEL_PROJECT_ID=your_project_id
```

### 4.3 Como Obter os Tokens

1. **VERCEL_TOKEN**:
   - Vercel Dashboard > Settings > Tokens
   - Create Token > Scope: Full Account

2. **VERCEL_ORG_ID & PROJECT_ID**:
   ```bash
   npx vercel link
   # Seguir instruções e copiar IDs do .vercel/project.json
   ```

## 📊 5. Monitoramento de Performance

### 5.1 Métricas Automáticas da Vercel

- ✅ **Core Web Vitals**: LCP, FID, CLS
- ✅ **Real User Monitoring**: Dados reais de usuários
- ✅ **Function Logs**: Monitoramento de edge functions

### 5.2 Otimizações de Imagem

```javascript
// Todas as imagens são otimizadas automaticamente
// Formatos WebP/AVIF são servidos quando suportados
// Lazy loading implementado via Intersection Observer
```

### 5.3 Bundle Analysis

```bash
# Verificar tamanho do bundle
npm run build
npx vite-bundle-analyzer dist/

# Limites configurados
# Chunk size warning: 1000kb
# Vendor chunks separados para melhor cache
```

## 🚀 6. Deploy Manual

### 6.1 Via CLI da Vercel

```bash
# Instalar CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### 6.2 Via Git Push

```bash
# Deploy automático ao fazer push
git add .
git commit -m "feat: nova funcionalidade"
git push origin main
```

## 📈 7. Limites do Plano Gratuito

### 7.1 Recursos Inclusos

- ✅ **100GB Bandwidth/mês**
- ✅ **100 deployments/dia**
- ✅ **Domínios ilimitados**
- ✅ **SSL automático**
- ✅ **Edge Network global**

### 7.2 Otimizações para Gratuito

- ✅ **Assets < 25MB**: Todos os assets otimizados
- ✅ **Build time < 45min**: Build otimizado (~2min)
- ✅ **Function timeout 10s**: Não aplicável (site estático)

## 🔍 8. Troubleshooting

### 8.1 Problemas Comuns

**Build falha**:
```bash
# Verificar dependências
npm ci
npm run build

# Verificar Node version
node --version # Deve ser 18+
```

**Assets não carregam**:
```javascript
// Verificar base path no vite.config.js
export default defineConfig({
  base: '/', // Deve ser '/' para Vercel
})
```

**Performance baixa**:
```bash
# Verificar bundle size
npm run build
du -sh dist/

# Implementar lazy loading se necessário
```

### 8.2 Logs e Debug

```bash
# Ver logs de deploy
vercel logs your-deployment-url

# Debug local
npm run preview
```

## ✅ 9. Checklist Final

- [ ] Repositório conectado à Vercel
- [ ] Build funcionando localmente
- [ ] Variáveis de ambiente configuradas
- [ ] Domínio configurado (se aplicável)
- [ ] GitHub Actions secrets configurados
- [ ] SSL ativo e funcionando
- [ ] Performance otimizada (< 3s LCP)
- [ ] Cache headers configurados
- [ ] Security headers ativos

## 📞 10. Suporte

- **Documentação Vercel**: https://vercel.com/docs
- **Status Page**: https://vercel-status.com
- **Community**: https://github.com/vercel/vercel/discussions

---

**🎉 Parabéns!** Seu projeto BeLink está agora otimizado e pronto para produção na Vercel com todas as melhores práticas implementadas.