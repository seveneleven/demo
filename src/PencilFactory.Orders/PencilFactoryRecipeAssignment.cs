using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Moryx.AbstractionLayer.Recipes;
using Moryx.Container;
using Moryx.Orders;
using Moryx.Orders.Assignment;

namespace PencilFactory.Orders;

/// <summary>
/// Recipe assignment for the PencilFactory
/// </summary>
[Plugin(LifeCycle.Singleton, typeof(IRecipeAssignment), Name = nameof(PencilFactoryRecipeAssignment))]
public class PencilFactoryRecipeAssignment : RecipeAssignmentBase<RecipeAssignmentConfig>
{
    /// <inheritdoc />
    public override async Task<IReadOnlyList<IProductRecipe>> SelectRecipes(Operation operation, IOperationLogger operationLogger)
    {
        return new[] { await LoadDefaultRecipe(operation.Product) };
    }

    /// <inheritdoc />
    public override Task<bool> ProcessRecipe(IProductRecipe clone, Operation operation, IOperationLogger operationLogger)
    {
        return Task.FromResult(true);
    }
}