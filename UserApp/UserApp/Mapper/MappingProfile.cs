using AutoMapper;
using UserApp.Models.Data;
using UserApp.Models.Dto;

namespace UserApp.Mapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<UserDto, UserDao>(MemberList.Source);
            CreateMap<UserDao, UserTableDto>();
        }
    }
}