# NarutoCharacter SDK utility: feature_add
module NarutoCharacterUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
