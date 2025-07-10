using Moryx.Container;
using MyApplication.MyModule.Components;

namespace MyApplication.MyModule.Implementation
{
    [Component(LifeCycle.Singleton, typeof(ICustomModule))]
    public class Component : ICustomModule
    {
        public void Start()
        {
        }

        public void Stop()
        {
        }
    }
}