package br.leitao.clinica.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "tb_consulta", schema = "db_clinica")
public class Consulta implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name = "db_clinica.sq_pk_consulta", sequenceName = "db_clinica.sq_pk_consulta")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "db_clinica.sq_pk_consulta")
	@Column(name = "id")
	private Long id;
	
	private String anotacoes;
	private String resceituario;
	
	@ManyToOne
	private Paciente paciente;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAnotacoes() {
		return anotacoes;
	}

	public void setAnotacoes(String anotacoes) {
		this.anotacoes = anotacoes;
	}

	public String getResceituario() {
		return resceituario;
	}

	public void setResceituario(String resceituario) {
		this.resceituario = resceituario;
	}

	public Paciente getPaciente() {
		return paciente;
	}

	public void setPaciente(Paciente paciente) {
		this.paciente = paciente;
	}

	
}
