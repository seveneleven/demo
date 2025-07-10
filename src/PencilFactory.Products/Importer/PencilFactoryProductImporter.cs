using System.Collections.Generic;
using System.Threading.Tasks;
using Moryx.AbstractionLayer.Products;
using Moryx.Container;
using Moryx.Logging;
using Moryx.Modules;
using Moryx.Products.Management;

namespace PencilFactory.Products;

/// <summary>
/// Imports products for PencilFactory
/// </summary>
[ExpectedConfig(typeof(PencilFactoryProductImporterConfig))]
[Plugin(LifeCycle.Transient, typeof(IProductImporter), Name = nameof(PencilFactoryProductImporter))]
public  class PencilFactoryProductImporter :  ProductImporterBase<PencilFactoryProductImporterConfig, PencilFactoryImportParameters>, ILoggingComponent
{
    /// <inheritdoc />
    public IModuleLogger Logger { get; set; }

    public IProductStorage Storage { get; set; }

    protected override Task<ProductImporterResult> Import(ProductImportContext context, PencilFactoryImportParameters parameters)
    {
        var products = new List<ProductType>();

        // TODO: Create objects from parameters, file or endpoint

        return Task.FromResult(new ProductImporterResult { ImportedTypes = products });
    }
}