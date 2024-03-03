using System;

namespace RickAndMortyApi.Models
{
    public class Character
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }
        public string Species { get; set; }
        public string Gender { get; set; }
        // Diğer özellikler buraya eklenebilir
    }
}
