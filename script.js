document.addEventListener('DOMContentLoaded', () => {
    const scenes = {
        inicio: {
            image: 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_limit,w_1200,h_630,dpr_1/https://assets.app.engoo.com/organizations/5d2656f1-9162-461d-88c7-b2505623d8cb/images/7hLIhFkGJUljSN35IxeisA.jpeg',
            text: 'Você está prestes a explorar a lendária Atlantis. Suas escolhas definirão seu destino.',
            choices: [
                { text: 'Iniciar Exploração', nextScene: 'exploracao' }
            ]
        },
        exploracao: {
            image: 'https://t3.ftcdn.net/jpg/05/68/71/72/360_F_568717228_DjaSZoJicw5QJ9Ij1sEAgrtK3CcChNXE.jpg',
            text: 'Você chegou às ruínas submersas de Atlantis. O que deseja fazer?',
            choices: [
                { text: 'Investigar as ruínas', nextScene: 'investigar_ruinas' },
                { text: 'Nadar para a cidade submersa', nextScene: 'nadar_cidade' }
            ]
        },
        investigar_ruinas: {
            image: 'https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/650c3731bf3033001d994b84.jpg',
            text: 'Você encontrou um templo antigo. O que deseja fazer?',
            choices: [
                { text: 'Entrar no templo', nextScene: 'entrar_templo' },
                { text: 'Explorar os arredores', nextScene: 'explorar_arredores' }
            ]
        },
        nadar_cidade: {
            image: 'https://i.pinimg.com/736x/f4/d6/fc/f4d6fc2d18cfb7540afde1429c7b241e.jpg',
            text: 'Você chegou à cidade submersa. O que deseja fazer?',
            choices: [
                { text: 'Explorar a cidade', nextScene: 'explorar_cidade' },
                { text: 'Voltar para as ruínas', nextScene: 'voltar_ruinas' }
            ]
        },
        entrar_templo: {
            image: 'https://media.wnyc.org/i/800/0/c/85/1/atlantis.jpg',
            text: 'Dentro do templo, você encontra artefatos incríveis e inscrições antigas.',
            choices: [
                { text: 'Examinar os artefatos', nextScene: 'artefatos' },
                { text: 'Sair e explorar mais', nextScene: 'exploracao' }
            ]
        },
        explorar_arredores: {
            image: 'https://t3.ftcdn.net/jpg/02/63/55/22/360_F_263552204_bdJrd0ZrKSDP2MDTInrbMx4nXACDmU2D.jpg',
            text: 'Você encontrou um jardim submerso cheio de plantas exóticas.',
            choices: [
                { text: 'Coletar amostras', nextScene: 'final' },
                { text: 'Voltar ao início', nextScene: 'inicio' }
            ]
        },
        explorar_cidade: {
            image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=2080x10000:format=jpg/path/s2217cd0bb1220415/image/i3b9786b270587798/version/1698266363/underwater-ruins-possibly-remnants-of-a-once-great-civilization.jpg',
            text: 'Você encontra criaturas marinhas incríveis e sinais de uma civilização perdida.',
            choices: [
                { text: 'Investigar as criaturas', nextScene: 'vida_marinha' },
                { text: 'Voltar para as ruínas', nextScene: 'voltar_ruinas' }
            ]
        },
        vida_marinha: {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1dOONpi-BOjxET7NDV2rqy_gRsi9F_UTaug&s',
            text: 'Você entra em contato com seres marinhos que compartilham seus segredos.',
            choices: [
                { text: 'Aprender com eles', nextScene: 'final' },
                { text: 'Recusar e voltar ao início', nextScene: 'inicio' }
            ]
        },
        voltar_ruinas: {
            image: 'https://t3.ftcdn.net/jpg/05/68/71/72/360_F_568717228_DjaSZoJicw5QJ9Ij1sEAgrtK3CcChNXE.jpg',
            text: 'Você voltou para as ruínas e decide explorar novamente.',
            choices: [
                { text: 'Investigar as ruínas', nextScene: 'investigar_ruinas' },
                { text: 'Nadar para a cidade submersa', nextScene: 'nadar_cidade' }
            ]
        },
        final: {
            image: 'https://media.wnyc.org/i/800/0/c/85/1/atlantis.jpg',
            text: 'Você teve uma exploração incrível em Atlantis e coletou muitos segredos antigos.',
            choices: [
                { text: 'Voltar ao início', nextScene: 'inicio' }
            ]
        }
    };

    const sceneImage = document.getElementById('scene-image');
    const sceneText = document.getElementById('scene-text');
    const choicesContainer = document.getElementById('choices-container');
    const restartButton = document.getElementById('restart-button');

    function renderScene(sceneKey) {
        const scene = scenes[sceneKey];

        if (scene) {
            sceneImage.src = scene.image;
            sceneText.textContent = scene.text;
            choicesContainer.innerHTML = '';

            scene.choices.forEach(choice => {
                const button = document.createElement('button');
                button.textContent = choice.text;
                button.className = 'choice-button';
                button.onclick = () => renderScene(choice.nextScene);
                choicesContainer.appendChild(button);
            });

            restartButton.style.display = sceneKey === 'final' ? 'block' : 'none';
        }
    }

    document.querySelector('button').onclick = () => {
        document.querySelector('.overlay').style.display = 'none';
        renderScene('exploracao');
    };

    restartButton.onclick = () => {
        document.querySelector('.overlay').style.display = 'flex';
        renderScene('inicio');
    };

    renderScene('inicio');
});
