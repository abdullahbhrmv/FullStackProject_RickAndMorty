using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace RickAndMortyApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CharactersController : ControllerBase
    {
        private readonly ICharacterService _characterService;

        public CharactersController(ICharacterService characterService)
        {
            _characterService = characterService;
        }

        [HttpGet]
        public IActionResult GetAllCharacters()
        {
            var characters = _characterService.GetAllCharacters();
            return Ok(characters);
        }

        [HttpGet("{id}")]
        public IActionResult GetCharacterById(int id)
        {
            var character = _characterService.GetCharacterById(id);
            if (character == null)
            {
                return NotFound();
            }
            return Ok(character);
        }

        // Diğer CRUD işlemleri için gerekli action metodları buraya eklenebilir
    }
}
