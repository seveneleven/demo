using Microsoft.AspNetCore.Mvc;
using MyApplication.MyModule.Facade;
using PencilFactory.CustomModule.Endpoints.Models;

namespace PencilFactory.CustomModule.Endpoints
{
    [ApiController]
    [Route("/api/moryx/custom-module")]
    public class CustomModuleController : ControllerBase
    {
        private readonly ICustomFacade _customModuleFacade;

        public CustomModuleController(ICustomFacade customModuleFacade)
        {
            _customModuleFacade = customModuleFacade;
        }

        [HttpGet("value")]
        public ActionResult<ValueModel> GetValue()
        {
            return new ValueModel
            {
                Value = _customModuleFacade.Value,
            };
        }
    }
}
