package br.com.ifpe.oxeefood.api.produto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.ifpe.oxeefood.modelo.produto.CategoriaProduto;
import br.com.ifpe.oxeefood.modelo.produto.CategoriaProdutoService;
import br.com.ifpe.oxeefood.modelo.produto.Produto;

@RestController
@RequestMapping("/api/categoriaproduto")
@CrossOrigin
public class CategoriaProdutoController {

   @Autowired
   private CategoriaProdutoService categoriaprodutoService;

   @PostMapping
   public ResponseEntity<CategoriaProduto> save(@RequestBody @valid CategoriaProdutoRequest request) {

      Produto categoriaProdutoNovo = (request.build());
      CategoriaProduto categoriaProduto = categoriaprodutoService.save(categoriaProdutoNovo);
      return new ResponseEntity<CategoriaProduto>(categoriaProduto, HttpStatus.CREATED);
   }

   @GetMapping
   public List<CategoriaProduto> listarTodos() {
      return categoriaprodutoService.listarTodos();
   }

   @GetMapping("/{id}")
   public CategoriaProduto obterPorID(@PathVariable Long id) {

      return CategoriaProdutoService.obterPorID(id);
   }

   @PutMapping("/{id}")
   public ResponseEntity<CategoriaProduto> update(@PathVariable("id") Long id,
         @RequestBody CategoriaProdutoRequest request) {

      categoriaprodutoService.update(id, request.build());
      return ResponseEntity.ok().build();

   }
}