package br.leitao.clinica.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.leitao.clinica.entity.Medico;

public interface MedicoRepository extends JpaRepository<Medico, Long> {
}
