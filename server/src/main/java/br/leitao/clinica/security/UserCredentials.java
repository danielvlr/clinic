package br.leitao.clinica.security;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "tb_user", schema = "db_clinica")
public class UserCredentials {
	
	@Id
	@SequenceGenerator(name = "db_clinica.sq_pk_userCredentials", sequenceName = "db_clinica.sq_pk_userCredentials")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "db_clinica.sq_pk_userCredentials")
	@Column(name = "id")
	private Long id;
	private String username;
	private String password;
	private Boolean enabled;
	private String role;
	
	public UserCredentials() {
	}
	public UserCredentials(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Boolean getEnabled() {
		return enabled;
	}
	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
}