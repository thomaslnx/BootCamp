import React, { Component } from 'react';
import moment from 'moment';
import logo from '../../assets/logo.png';
import api from '../../services/api';

import { Container, Form } from './styles';

import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });

    this.setState({
      loading: false,
      repositories: await this.getLocalRepositories(),
    });
  }

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { repositoryInput, repositories } = this.state;

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.last_commit = moment(repository.pushed_at).fromNow();

      // const repositories = [...this.state.repositories, repository];
      // localStorage.setItem('repositories', JSON.stringify(repository));

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, repository],
        repositoryError: false,
      });

      const localRepositories = await this.getLocalRepositories();

      await localStorage.setItem(
        '@GitCompare:repositories',
        JSON.stringify([...localRepositories, repository]),
      );
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });

      // const permanent = JSON.parse(localStorage.getItem('repositories'));
      // console.log(permanent);
      // localStorage.clear();
    }
  };

  getLocalRepositories = async () => JSON.parse(await localStorage.getItem('@GitCompare:repositories')) || [];

  handleRemoveRepository = async (id) => {
    const { repositories } = this.state;
    const updatedRepositories = repositories.filter(repository => repository.id !== id);

    this.setState({ repositories: updatedRepositories });

    await localStorage.setItem('@GitCompare:repositories', JSON.stringify(updatedRepositories));
  };

  handleUpdateRepository = async (id) => {
    const { repositories } = this.state;
    const repository = repositories.find(repo => repo.id === id);

    try {
      const { data } = await api.get(`/repos/${repository.full_name}`);

      data.last_commit = moment(data.pushed_at).fromNow();

      this.setState({
        repositoryError: false,
        repositoryInput: '',
        repositories: repositories.map(repo => (repo.id === data.id ? data : repo)),
      });

      await localStorage.setItem('@GitCompare:repositories', JSON.stringify(repositories));
    } catch (err) {
      this.setState({ repositoryError: true });
    }
  };

  // this.state.repositories === '' ? this.permanent : this.state.respositories
  render() {
    const {
      repositories, repositoryInput, repositoryError, loading,
    } = this.state;
    return (
      <Container>
        <img src={logo} alt="github compare" />
        <Form withError={repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />

          <button type="submit">{loading ? <i className="fa fa-spinner fa-pulse" /> : 'Ok'}</button>
        </Form>

        <CompareList
          repositories={repositories}
          removeRepository={this.handleRemoveRepository}
          updateRepository={this.handleUpdateRepository}
        />
        {/* <CompareList repositories={this.permanent} /> */}
      </Container>
    );
  }
}
