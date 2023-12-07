async function obterDadosDaApi() {
  let nome = document.getElementById('meuInput').value
  const apiUrl = `https://api.github.com/users/${nome}`

  try {
    // Fazer a requisição à API usando fetch
    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error('Erro ao obter os dados da API')
    }

    // Obter os dados da API
    const dadosDaApi = await response.json()

    manipularDados(dadosDaApi)
  } catch (error) {
    // Tratar erros
    console.error('Erro:', error)
  }
}

function manipularDados(dados) {
  document.querySelector('#pesquisar').classList.add('hidder')
  document.querySelector('#card').classList.remove('hidder')

  let imagem = document.createElement('img')
  let h4 = document.createElement('h3')
  let p = document.createElement('h5')
  let icon = document.createElement('ion-icon')
  let location = document.createElement('h5')
  let followers = document.createElement('p')
  let following = document.createElement('p')
  let public_repos = document.createElement('p')
  let email = dados.email
  let twitter = dados.twitter_username
  let blog = dados.blog
  let git = dados.html_url
  icon.name = 'location'
  icon.style.fontWeight = '900'
  icon.style.fontSize = '3.5vh'
  icon.style.marginTop = '7px'
  location.innerHTML = dados.location

  followers.innerHTML = dados.followers
  following.innerHTML = dados.following
  public_repos.innerHTML = dados.public_repos

  p.innerHTML = dados.bio
  h4.innerHTML = dados.name
  imagem.src = dados.avatar_url

  document.querySelector('#perfil').appendChild(imagem)
  document.querySelector('#content').appendChild(h4)
  document.querySelector('#content').appendChild(p)

  if (dados.location) {
    document.querySelector('#location').appendChild(icon)
    document.querySelector('#location').appendChild(location)
  }
  document.querySelector('#followers').appendChild(followers)
  document.querySelector('#following').appendChild(following)
  document.querySelector('#public_repos').appendChild(public_repos)
  document.querySelector('#email').href = email
  document.querySelector('#twitter').href = twitter
  document.querySelector('#site').href = blog
  document.querySelector('#git').href = git

  divs_hr = document.querySelectorAll('.div-content')
  divs_hr.forEach(function (divs_hr) {
    let hr = document.createElement('hr')
    divs_hr.appendChild(hr)
  })
  console.log(dados.name)
}

async function obterEManipularDados() {
  await obterDadosDaApi()
}

obterEManipularDados()
