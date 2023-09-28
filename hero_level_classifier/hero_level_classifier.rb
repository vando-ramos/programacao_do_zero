print 'Enter the hero name: '
hero_name = gets.chomp

print 'How much XP?: '
xp = gets.chomp.to_i

if xp >= 1001 && xp <= 2000
  level = 'bronze'
elsif xp >= 2001 && xp <= 5000
  level = 'silver'
elsif xp >= 6001 && xp <= 7000
  level = 'gold'
elsif xp >= 7001 && xp <= 8000
  level = 'platinum'
elsif xp >= 8001 && xp <= 9000
  level = 'ascending'
elsif xp >= 9001 && xp <= 10000
  level = 'immortal'
elsif xp >= 10001
  level = 'radiant'
else
  level = 'iron'
end

puts "The hero named #{hero_name.capitalize} is at the #{level.capitalize} level."