using Moryx.AbstractionLayer.Products;

namespace PencilFactory.Products;

/// <summary>
/// Config for the <see cref="PencilFactoryProductImporter"/>
/// </summary>
public class PencilFactoryProductImporterConfig : ProductImporterConfig
{
    public override string PluginName => nameof(PencilFactoryProductImporter);
}