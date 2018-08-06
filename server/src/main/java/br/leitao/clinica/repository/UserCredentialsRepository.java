package br.leitao.clinica.repository;

import org.springframework.data.repository.CrudRepository;

import br.leitao.clinica.security.UserCredentials;

public interface UserCredentialsRepository extends CrudRepository<UserCredentials, Long> {
	public UserCredentials findByUsernameAndPassword(String username, String password);
}
