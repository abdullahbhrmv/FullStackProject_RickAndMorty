using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace RickAndMortyApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EpisodesController : ControllerBase
    {
        private readonly IEpisodeService _episodeService;

        public EpisodesController(IEpisodeService episodeService)
        {
            _episodeService = episodeService;
        }

        [HttpGet]
        public IActionResult GetAllEpisodes()
        {
            var episodes = _episodeService.GetAllEpisodes();
            return Ok(episodes);
        }

        [HttpGet("{id}")]
        public IActionResult GetEpisodeById(int id)
        {
            var episode = _episodeService.GetEpisodeById(id);
            if (episode == null)
            {
                return NotFound();
            }
            return Ok(episode);
        }

        // Diğer CRUD işlemleri için gerekli action metodları buraya eklenebilir
    }
}
