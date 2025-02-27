from PIL import Image

# Load the card sheet image
img = Image.open(r'C:\Users\proud\Documents\Code\Best-app\bestApp\assets\cards\CuteCards.png')  # replace with the path to your card sheet

# Set the card width and height based on your sheet (100x144)
card_width = 100
card_height = 144

# Number of cards in each row and column
cards_per_row = 15
cards_per_column = 4

# Iterate over each card and crop out the individual card image
for row in range(cards_per_column):
    for col in range(cards_per_row):
        # Calculate the coordinates for the current card
        left = col * card_width
        top = row * card_height
        right = left + card_width
        bottom = top + card_height
        
        # Crop the image
        card = img.crop((left, top, right, bottom))
        
        # Save the card image (adjust naming convention as needed)
        card.save(f'card_{row * cards_per_row + col + 1}.png')

print("Image slicing completed!")
