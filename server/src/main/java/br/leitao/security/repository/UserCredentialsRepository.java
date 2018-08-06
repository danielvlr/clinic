package br.leitao.security.repository;

import org.springframework.data.repository.CrudRepository;

import br.leitao.security.entity.UserCredentials;

public interface UserCredentialsRepository extends CrudRepository<UserCredentials, Long> {
	public UserCredentials findByUsernameAndPassword(String username, String password);
}
