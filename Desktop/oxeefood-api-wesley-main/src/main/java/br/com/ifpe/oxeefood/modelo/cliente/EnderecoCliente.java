package br.com.ifpe.oxeefood.modelo.cliente;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.ifpe.oxeefood.util.entity.EntidadeAuditavel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "EnderecoCliente")
@Where(clause = "habilitado = true")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EnderecoCliente extends EntidadeAuditavel {

  @JsonIgnore
  @ManyToOne
  private Cliente cliente;

  @Column
  private String rua;

  @Column
  private String numero;

  @Column
  private String bairro;

  public static Object builder() {
    return null;
  }

  public void setCliente(Cliente cliente2) {
  }
}