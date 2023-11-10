package br.com.ifpe.oxeefood.api.cliente;

import br.com.ifpe.oxeefood.modelo.cliente.EnderecoCliente;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class EnderecoClienteRequest {

   private String rua;

   private String numero;

   private String bairro;

   private String cep;

   private String cidade;

   private String estado;

   private String complemento;

   public EnderecoCliente build() {

      return EnderecoCliente.builder()
            .rua(rua)
            .numero(numero)
            .bairro(bairro)
            .cep(cep)
            .cidade(cidade)
            .estado(estado)
            .complemento(complemento)
            .build();
   }
}
