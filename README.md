# n8n
Controle de arquivos utilizados nas automações do n8n, modelos de Workflow, etc

## Instalação do n8n e suas dependencias - n8n Sef-hosted Server Ubuntu com npm

### Instalação NVM
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash

source ~/.profile

#### Obs. verificar a versão atual suportada pelo n8n antes de instalar
nvm install 18
nvm use 18

Instale o npm
sudo apt install npm

### Finalmente instale o n8n com o comando abaixo
sudo npm install n8n -g

### Opcional - Instalação e configuração do PM2
sudo npm install pm2 -g

### Inicie o n8n
pm2 start n8n
