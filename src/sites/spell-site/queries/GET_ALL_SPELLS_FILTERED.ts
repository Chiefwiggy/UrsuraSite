import {gql} from 'apollo-boost'

const GET_ALL_SPELLS_FILTERED = gql`
query GetAllFilteredSpells($spellFilters: SpellFilters) {
  spells {
    GetAllFilteredSpells(spell_filters: $spellFilters) {
      spell_list {
        name
        spell_name
        spell_level
        cast_time
        prep_cost
        prep_uses
        free_cost
        arcanotype
        spell_duration
        spell_duration_unit
        isRoleplay
        reset_condition
        spell_damage {
          base_damage
          damage_type
          damage_subtype
        }
        save_type
        spell_range {
          standard_range {
            min_range {
              range_unit
              range_value
            }
            max_range {
              range_unit
              range_value
            }
          }
        }
        spell_targets {
          target_unit
          target_count
          target_description
        }
        damage_attribute
        attribute_multiplier
        spell_description
      }
      filteredLength
    }
  }
}

`

export default GET_ALL_SPELLS_FILTERED;