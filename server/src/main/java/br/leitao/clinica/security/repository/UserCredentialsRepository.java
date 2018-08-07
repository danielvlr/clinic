package br.leitao.clinica.security.repository;

import org.springframework.data.repository.CrudRepository;

import br.leitao.clinica.security.entity.UserCredentials;

public interface UserCredentialsRepository extends CrudRepository<UserCredentials, Long> {
	public UserCredentials findByUsernameAndPassword(String username, String password);
}
