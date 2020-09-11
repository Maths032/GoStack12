import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';
import api from '../../services/api'


import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner:{
    login: string;
    avatar_url: string;
  }
}

interface Issues {
  html_url: string;
  title: string;
  id: number;
  user: {
    login: string;
  }
}

const Repository: React.FC = () => {

  const [repository, setRepository] = useState<Repository  | null >(null);
  const [issues, setIssues] = useState<Issues[]>([])

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {

    //usando o metodo .then o navegador não vai esperar uma requisição terminar para realizar a proxima, ele vai fazer as duas juntas

    api.get(`repos/${params.repository}`).then(response => {
      setRepository(response.data)
    })
    api.get(`repos/${params.repository}/issues`).then(response => {
      setIssues(response.data)
    })
    //
    // usando o metodo async/await o navegador vai esperar a primeira requisição finalizar pra dai sim iniciar a segunda

    // dessa maneira vamos deixar a aplicação mais lenta para o usuario final


    // async function loadData(){
    //  const repository = api.get(`repos/${params.repository}`)
    //  const issues = api.get(`repos/${params.repository}/issues`)
    // }

    // essa seria a maneira mais correta de escrever um async/await
    //
    //  async function loadData(): Promise<void>{
    //     const [repository, issues] = await Promise.all([

    //       api.get(`repos/${params.repository}`),
    //       api.get(`repos/${params.repository}/issues`)
    //     ]);
    //  }



    // loadData();
  }, [params.repository])

  return (
    <>
    <Header>
      <img src={logoImg} alt="Github Explorer "/>
      <Link to="/">

        Voltar
        <FiChevronLeft size={16} />
      </Link>
    </Header>
    { repository && (
        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login}></img>

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

          </header>

          <ul>
            <li>
               <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>

            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>

            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>

        </RepositoryInfo>
    )}
    <Issues>
    {issues.map(Issue => (

      <a key={Issue.id} href={Issue.html_url} >


         <div>
          <strong>{Issue.title}</strong>
           <p>{Issue.user.login}</p>
         </div>

       <FiChevronRight size={20} />
      </a>

    ))}
    </Issues>
    </>
  );
};

export default Repository;
