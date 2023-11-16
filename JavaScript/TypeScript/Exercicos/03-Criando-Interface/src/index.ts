interface GitHubUserResponse {
   id: number;
   login: string;
   name: string;
   bio: string;
   public_repos: number;
   repos_url: string;
   message?: "Not Found";
}

interface ReposGitHubResponse {
   name: string;
   description: string;
   fork: boolean;
   stargazers_count: number;
}

const githubUsers: GitHubUserResponse[] = [];

async function fetchUsers(username: string) {
   const response = await fetch(`https://api.github.com/users/${username}`);
   const user: GitHubUserResponse = await response.json();

   if (user.message) {
      alert(`Usuário não encontrado`);
   } else {
      githubUsers.push(user);

      alert(
         `O usuário ${user.login} foi adicionado\nId: ${user.id}\nNome: ${user.name}\nbio: ${user.bio}\nRepositórios Públicos: ${user.public_repos}`
      );
   }
}

async function showRepos(username: string) {
   const user = githubUsers.find((user) => user.login === username);
   if (typeof user === "undefined") {
      alert("Usuário não encontrado!");
   } else {
      const response = await fetch(user.repos_url);

      const repos: ReposGitHubResponse[] = await response.json();
      let message =
         `id: ${user.id}\n` +
         `\nlogin: ${user.login}` +
         `\nNome: ${user.name}` +
         `\nBio: ${user.bio}` +
         `\nRepositórios públicos: ${user.public_repos}`;

      repos.forEach((repo) => {
         message +=
            `\nNome: ${repo.name}` +
            `\nDescrição: ${repo.description}` +
            `\nEstrelas: ${repo.stargazers_count}` +
            `\nÉ um fork: ${repo.fork ? "Sim" : "Não"}\n`;
      });

      alert(message);
   }
}

function showAllUsers() {
   let message = "\n\tUsuários\n";

   githubUsers.forEach((user) => {
      message += `\n- ${user.login}\t\t
      Quantidade de Repositório: ${user.public_repos}`;
   });
   alert(message);
}
function showReposTotal() {
   const reposTotal = githubUsers.reduce((accumulator, user) => accumulator + user.public_repos, 0);

   alert(`O grupo possui um total de ${reposTotal} repositórios públicos!`);
}

function showTopFive() {
   const topFive = githubUsers
      .slice()
      .sort((a, b) => b.public_repos - a.public_repos)
      .slice(0, 5);

   let message = "Top 5 usuários com mais repositórios públicos:\n";

   topFive.forEach((user, index) => {
      message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios`;
   });

   alert(message);
}
async function menu() {
   await fetchUsers("OpyherJm");
   await fetchUsers("julianaconde");
   showRepos("OpyherJm");
   showRepos("julianaconde");

   showReposTotal();
   showAllUsers();
}

menu();
