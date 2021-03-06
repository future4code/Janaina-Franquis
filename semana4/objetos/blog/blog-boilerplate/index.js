/* Capture os valores dos campos do HTML e crie um objeto para armazenar as informações do seu post, possuindo as mesmas propriedades que serão preenchidas no formulário. */
// Capturando elementos do campos.
const titleBlog = document.getElementById("titulo-post");
//console.log(titleBlog)
const authorBlog = document.getElementById("autor-post");
//console.log(authorBlog)
const contentBlog = document.getElementById("conteudo-post");
//console.log(contentBlog)
const imageBlog = document.getElementById("link-para-imagem");


//crie um objeto para armazenar as informações do seu post.
//A propriedade value define ou retorna o valor do atributo value de um campo de texto
const newPost = {
    title: titleBlog.value,
    author: authorBlog.value,
    content: contentBlog.value,
    image: imageBlog.value
}

/* Ao preencher o formulário, adicione o objeto criado no passo acima a um array de objetos e limpe os campos do formulário. Para testar, faça com que o array seja impresso no console.*/

const galleryPost = []; // 
galleryPost.push(newPost);

// limpar campos do formulário.
document.getElementById("titulo-post").value = ''
document.getElementById("autor-post").value = ''
document.getElementById("conteudo-post").value = ''
document.getElementById("imagem-post").value = ''
document.getElementById("descricao-imagem-post").value = ''

/* Na mesma página, crie uma seção no HTML que será responsável por mostrar os posts. Pode ser uma div ou uma section, por exemplo. */
/* Crie uma função responsável por inserir os posts no HTML. Não se preocupe com a aparência, garanta que os dados estão sendo exibido */
let titlePost = `<h1>${galleryPost[galleryPost.length - 1].title}</h1>`
let authorPost = `<h3>Por: ${galleryPost[galleryPost.length - 1].author}</h3>`
let contentPost = `<p>${galleryPost[galleryPost.length - 1].content}</p>`


/* Adicione a propriedade "imagem" ao formulário do post. */
/* Crie um campo opcional para o usuário colocar um link para a imagem na hora de cadastrar o post; */
/* Exiba imagem em cada post;*/